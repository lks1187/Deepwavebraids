"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;

declare global {
  interface Window {
    TiktokAnalyticsObject?: string;
    ttq?: any;
  }
}

function loadTikTokPixel() {
  if (!PIXEL_ID || window.ttq?._i?.[PIXEL_ID]) return;

  const w = window as any;
  const t = "ttq";
  w.TiktokAnalyticsObject = t;
  const ttq = (w[t] = w[t] || []);
  ttq.methods = [
    "page", "track", "identify", "instances", "debug",
    "on", "off", "once", "ready", "alias", "group",
    "enableCookie", "disableCookie", "holdConsent",
    "revokeConsent", "grantConsent",
  ];
  ttq.setAndDefer = function (t: any, e: string) {
    t[e] = function () {
      t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };
  for (let i = 0; i < ttq.methods.length; i++) {
    ttq.setAndDefer(ttq, ttq.methods[i]);
  }
  ttq.instance = function (t: string) {
    const e = ttq._i[t] || [];
    for (let n = 0; n < ttq.methods.length; n++) {
      ttq.setAndDefer(e, ttq.methods[n]);
    }
    return e;
  };
  ttq.load = function (e: string, n?: any) {
    const r = "https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i = ttq._i || {};
    ttq._i[e] = [];
    ttq._i[e]._u = r;
    ttq._t = ttq._t || {};
    ttq._t[e] = +new Date();
    ttq._o = ttq._o || {};
    ttq._o[e] = n || {};
    const i = document.createElement("script");
    i.type = "text/javascript";
    i.async = true;
    i.src = r + "?sdkid=" + e + "&lib=" + t;
    const a = document.getElementsByTagName("script")[0];
    a.parentNode?.insertBefore(i, a);
  };

  ttq.load(PIXEL_ID);
  ttq.page();
}

export function trackEvent(
  event: string,
  params?: Record<string, any>
) {
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track(event, params);
  }
}

export function trackViewContent(product: {
  content_id: string;
  content_name: string;
  content_type: string;
  price: number;
  currency: string;
}) {
  trackEvent("ViewContent", {
    contents: [{ content_id: product.content_id, content_name: product.content_name, content_type: product.content_type }],
    value: product.price,
    currency: product.currency,
  });
}

export function trackAddToCart(product: {
  content_id: string;
  content_name: string;
  price: number;
  currency: string;
  quantity: number;
}) {
  trackEvent("AddToCart", {
    contents: [{ content_id: product.content_id, content_name: product.content_name, content_type: "product", quantity: product.quantity }],
    value: product.price * product.quantity,
    currency: product.currency,
  });
}

export function trackInitiateCheckout(value: number, currency: string) {
  trackEvent("InitiateCheckout", { value, currency });
}

export function trackCompletePayment(value: number, currency: string, orderId: string) {
  trackEvent("CompletePayment", { value, currency, contents: [{ content_id: orderId, content_type: "product" }] });
}

export default function TikTokPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const consent = localStorage.getItem("dwb_cookie_consent");
    if (consent !== "accepted") return;
    loadTikTokPixel();
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem("dwb_cookie_consent");
    if (consent !== "accepted" || !window.ttq) return;
    window.ttq.page();
  }, [pathname, searchParams]);

  return null;
}
