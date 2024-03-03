const TypingAnimation = () => {
  return (
    <div className="flex h-8 max-w-fit items-center space-x-2 rounded-lg bg-gray-800 p-2 text-white">
      <div className="border-primary h-1.5 w-1.5 animate-[bounce_600ms_infinite_100ms] rounded-full bg-white "></div>
      <div className="border-primary h-1.5 w-1.5 animate-[bounce_600ms_infinite_200ms] rounded-full bg-white "></div>
      <div className="border-primary h-1.5 w-1.5 animate-[bounce_600ms_infinite_300ms] rounded-full bg-white "></div>
    </div>
  );
};

export default TypingAnimation;
