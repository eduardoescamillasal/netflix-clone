"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Terms() {
  const [showExtraTerms, setShowExtraTerms] = useState(false);
  return (
    <div className="mb-10 mt-4 max-w-72 text-xs text-gray-600">
      <div className="mb-5">
        <span>
          This page uses Google reCAPTCHA to verify you are not a bot.
        </span>
        <Button
          variant="ghost"
          onClick={() => setShowExtraTerms(!showExtraTerms)}
          className="opacity-1 ml-1 h-fit p-0 text-[#0071EB] hover:bg-transparent"
        >
          more info
        </Button>
      </div>
      <div className="h-28">
        {showExtraTerms && (
          <p>
            Information recompiled from Google reCAPTCHA is subject to privacy
            policies, and is not shared with any third parties. It is used to
            maintain and improve the quality of the service, and to help prevent
            fraud and abuse.
          </p>
        )}
      </div>
    </div>
  );
}
