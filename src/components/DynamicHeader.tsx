import { useState, useEffect } from 'react';
const DynamicHeader = () => {
  const [hasShrunk, setHasShrunk] = useState(false);
  const HEIGHT_DIFFERENCE_BETWEEN_INNER_OUTER_HEAD = 100;
  const HEADER_ENLARGE_THRESHOLD = 4;

  useEffect(() => {
    const handleScroll = () => {
      if (
        (!hasShrunk &&
          document.body.scrollTop >
            HEIGHT_DIFFERENCE_BETWEEN_INNER_OUTER_HEAD) ||
        document.documentElement.scrollTop >
          HEIGHT_DIFFERENCE_BETWEEN_INNER_OUTER_HEAD
      ) {
        setHasShrunk(true);
      }

      if (
        hasShrunk &&
        document.body.scrollTop < HEADER_ENLARGE_THRESHOLD &&
        document.documentElement.scrollTop < HEADER_ENLARGE_THRESHOLD
      ) {
        setHasShrunk(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  }, [hasShrunk]);
  return (
    <header className="sticky -top-[100px] z-10 flex h-[150px] w-full grow flex-col justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="sticky top-0 flex h-[50px] flex-row justify-center">
        <h1
          className={`w-11/12 self-center truncate font-bold capitalize transition-all lg:overflow-visible ${
            hasShrunk ? 'text-lg lg:text-2xl' : 'text-3xl lg:text-5xl'
          }`}
        >
          Lizard Blog
        </h1>
      </div>
    </header>
  );
};

export default DynamicHeader;
