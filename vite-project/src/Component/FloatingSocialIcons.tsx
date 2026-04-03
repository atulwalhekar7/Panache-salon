/* No React import needed for functional component without hooks */

export default function FloatingSocialIcons() {
  return (
    <>
      <style>{`
        .floating-icons {
          position: fixed;
          bottom: 40px;
          right: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 1000;
        }

        .floating-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: #25D366; /* WhatsApp green default */
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          color: white;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .floating-icons a.instagram {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        }

        .floating-icons a:hover {
          transform: translateY(-6px) scale(1.1);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .floating-icons svg {
          width: 26px;
          height: 26px;
          fill: white;
        }
      `}</style>

      <div className="floating-icons">
        {/* WhatsApp */}
        <a
          href="https://wa.me/9890794670"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20.52 3.48A11.78 11.78 0 0012 0C5.373 0 0 5.372 0 12c0 2.11.555 4.088 1.61 5.86L0 24l6.38-1.59A11.98 11.98 0 0012 24c6.627 0 12-5.372 12-12 0-3.21-1.256-6.223-3.48-8.52zm-8.52 18.33c-1.98 0-3.84-.53-5.46-1.44l-.39-.23-3.78.94.99-3.7-.25-.38a9.49 9.49 0 01-1.44-5.37c0-5.25 4.26-9.5 9.51-9.5a9.44 9.44 0 016.71 2.79 9.35 9.35 0 012.79 6.71c0 5.25-4.25 9.5-9.5 9.5zm5.47-7.28c-.29-.14-1.7-.84-1.96-.93-.26-.09-.45-.14-.64.14-.19.27-.73.93-.9 1.12-.16.19-.32.21-.6.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.6-2.01-.16-.28-.02-.43.12-.57.12-.12.29-.3.44-.45.15-.15.19-.26.29-.43.1-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.37-.01-.56-.01-.19 0-.5.07-.77.35-.26.28-1 1-1 2.43 0 1.43 1.03 2.82 1.17 3.02.14.2 2.02 3.09 4.9 4.33.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.37-.06-.12-.25-.2-.54-.34z"></path>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/patilshubha21?igsh=MTFpYTAyYWkza3JuNg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
          aria-label="Instagram"
          title="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm5.25-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"></path>
          </svg>
        </a>
      </div>
    </>
  );
}