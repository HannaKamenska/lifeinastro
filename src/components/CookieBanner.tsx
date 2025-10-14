import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import LegalContent from "@/components/LegalContent";

const COOKIE_KEY = "cookie_consent";

interface CookieBannerProps {
  onShowLegal?: () => void;
}

export default function CookieBanner({ onShowLegal }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 border-t border-border p-4 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <span className="text-sm text-muted-foreground mb-2 md:mb-0">
          Этот сайт использует cookies для улучшения работы и анализа трафика.
          Продолжая пользоваться сайтом, вы соглашаетесь с нашей{" "}
          <button
            type="button"
            className="underline text-primary hover:text-accent bg-transparent border-0 p-0 m-0 cursor-pointer"
            onClick={() => {
              setOpen(true);
              onShowLegal?.(); // 🔔 вызываем внешний обработчик, если он передан
            }}
          >
            политикой конфиденциальности
          </button>
          .
        </span>
        <button
          onClick={acceptCookies}
          className="ml-0 md:ml-4 px-4 py-2 rounded bg-gold text-white font-semibold hover:bg-gold/90 transition"
        >
          Принять
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 border-none bg-transparent">
          <LegalContent
            variant="modal"
            type="privacy"
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
