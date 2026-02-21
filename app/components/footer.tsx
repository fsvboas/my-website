const Footer = () => {
  const lastUpdateDate = "21/02/2026";

  return (
    <footer className="w-full flex justify-end">
      <span className="text-xs text-gray-600 dark:text-gray-400">
        Última atualização em: {lastUpdateDate}
      </span>
    </footer>
  );
};

export default Footer;
