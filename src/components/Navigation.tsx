import LegalContent from "@/components/LegalContent";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const privacyRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (privacyRef.current && !privacyRef.current.contains(event.target as Node)) {
        setShowPrivacy(false);
      }
      if (termsRef.current && !termsRef.current.contains(event.target as Node)) {
        setShowTerms(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button onClick={() => setShowPrivacy(true)}>Privacy Policy</button>
      <button onClick={() => setShowTerms(true)}>Terms of Service</button>

      {showPrivacy && (
        <div ref={privacyRef}>
          <LegalContent
            variant="modal"
            type="privacy"
            onClose={() => setShowPrivacy(false)}
          />
        </div>
      )}

      {showTerms && (
        <div ref={termsRef}>
          <LegalContent
            variant="modal"
            type="terms"
            onClose={() => setShowTerms(false)}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;

