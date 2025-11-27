const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Portfolio Data Science. Tous droits réservés.</p>
            </div>
            <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 2rem 0;
          margin-top: auto;
          text-align: center;
          color: var(--text-secondary);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
