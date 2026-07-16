"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "41787000000"; // TODO: Replace with Randy's real WhatsApp number
const DEFAULT_MESSAGE = "Bonjour ! J'ai une question sur vos mèches deep wave 🙋‍♀️";

export default function WhatsAppButton() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      {isTooltipOpen && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setIsTooltipOpen(false)}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={12} className="text-gray-400" />
          </button>
          <p className="text-gray-800 text-sm font-medium mb-1">
            Besoin d&apos;aide ? 💬
          </p>
          <p className="text-gray-500 text-xs mb-3">
            Répond en moins de 2h. Pose ta question sur WhatsApp !
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium py-2.5 px-4 rounded-xl text-center transition-colors"
          >
            Démarrer la conversation
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsTooltipOpen(!isTooltipOpen)}
        className="group w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </button>

      {/* Pulse animation */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          80%, 100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
