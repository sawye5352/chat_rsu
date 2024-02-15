const TypingAnimation = () => {
  return (
    <div className="mb-3 ml-2 flex items-center space-x-2">
      <p>Loading</p>
      <div className="border-primary h-1.5 w-1.5 animate-[bounce_800ms_infinite_100ms] rounded-full bg-blue-400 "></div>
      <div className="border-primary h-1.5 w-1.5 animate-[bounce_800ms_infinite_200ms] rounded-full bg-blue-400 "></div>
      <div className="border-primary h-1.5 w-1.5 animate-[bounce_800ms_infinite_300ms] rounded-full bg-blue-400 "></div>
    </div>
  );
};

export default TypingAnimation;
