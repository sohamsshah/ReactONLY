import React, { useEffect } from "react";

export default function useDocumentTitle(count) {
  useEffect(() => {
    document.title = count;
  });
}
