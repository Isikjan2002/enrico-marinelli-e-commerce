const Contact = () => {
  return (
    <div className="sm:h-screen p-4 sm:p-0 flex items-center justify-center">
      <div className="about-content text-center max-w-2xl mx-auto my-5">
        <h2 className="text-2xl text-center mb-10 max-sm:text-xl text-accent-content">
          Enrico Marinelli's Premier Men's Fashion Boutique
        </h2>

        <div className="text-center text-lg text-accent-content space-y-4">
          <div className="flex gap-6">
            <span className="font-bold">Instagram:</span>
            <a
              href="https://www.instagram.com/enricomarinelli_sam/"
              target="_blank"
              rel="noreferrer"
              className="text-accent-content underline"
            >
              enricomarinelli_sam
            </a>
          </div>
          <div className="flex gap-6">
            <span className="font-bold">Facebook:</span>
            <a
              href="https://www.facebook.com/people/Enricomarinellisam/61554328480691/?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="text-accent-content underline"
            >
              Enricomarinellisam
            </a>
          </div>
          <div className="flex gap-6">
            <span className="font-bold">Telegram:</span>
            <a
              href="https://t.me/enricomarinelli_sam"
              target="_blank"
              rel="noreferrer"
              className="text-accent-content underline"
            >
              enricomarinelli_sam
            </a>
          </div>
          <div className="flex gap-6">
            <span className="font-bold">Address:</span>
            Bustansaroy St. Samarkand, Uzbekistan 140100
          </div>
          <div className="flex gap-6">
            <span className="font-bold">Email address:</span>
            <a
              href="mailto:enricomarinellisam@gmail.com"
              className="text-accent-content underline"
            >
              enricomarinellisam@gmail.com
            </a>
          </div>
          <div className="flex gap-6">
            <span className="font-bold">Contact number:</span>
            +998 94 244-44-30
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
