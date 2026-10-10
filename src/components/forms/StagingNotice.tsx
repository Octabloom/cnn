import React from "react";
import { ShieldCheck, Info } from "lucide-react";

interface StagingNoticeProps {
  compact?: boolean;
}

export function StagingNotice({ compact = false }: StagingNoticeProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FBF7E6] border border-[#E8DEC0] text-[#6B5A24] text-[11px] font-semibold leading-tight shadow-xs">
        <Info className="w-3.5 h-3.5 shrink-0 text-[#A8780F]" />
        <span>
          <strong>Staging Prototype:</strong> Real submissions are paused awaiting CSNN routing setup. No data is stored or transmitted.
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#FBF7E6] border border-[#E8DEC0] p-3.5 text-[#5B5440] text-xs leading-relaxed shadow-xs">
      <div className="flex items-center gap-2 text-[#A8780F] font-black text-xs mb-1">
        <ShieldCheck className="w-4 h-4" />
        <span>Staging Mode Notice — Submission Paused</span>
      </div>
      <p>
        In accordance with client deployment guidelines, automated email delivery remains securely <strong>disabled by default</strong> until CSNN Toronto authorizes the final destination address. Submitting this form will not collect, transmit, or record personal information.
      </p>
    </div>
  );
}
