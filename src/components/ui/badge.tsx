import React from "react";

export function Badge({ text, color }: { text: string; color: string }) {
  return <span className={`text-sm text-white px-2 py-1 rounded-full ${color}`}>{text}</span>;
}
