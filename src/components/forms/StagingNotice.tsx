import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

interface AdmissionsNoticeProps {
  compact?: boolean;
}

export function AdmissionsNotice({ compact = false }: AdmissionsNoticeProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF6E8] border border-[#E8DEC0] text-[#5B5440] text-[11px] font-semibold leading-tight shadow-xs">
        <Lock className="w-3.5 h-3.5 shrink-0 text-[#1B7A42]" />
        <span>
          <strong>Official CSNN Admissions Portal:</strong> Your information is protected by 256-bit SSL encryption. Zero obligation or upfront payment.
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#FAF6E8] border border-[#E8DEC0] p-3.5 text-[#5B5440] text-xs leading-relaxed shadow-xs">
      <div className="flex items-center gap-2 text-[#13277A] font-black text-xs mb-1">
        <ShieldCheck className="w-4 h-4 text-[#1B7A42]" />
        <span>Official Admissions Privacy Guarantee</span>
      </div>
      <p>
        Your application is transmitted directly and securely to the CSNN Toronto administrative admissions office. Your contact details will only be used to discuss course curriculum, schedules, and enrollment options.
      </p>
    </div>
  );
}
