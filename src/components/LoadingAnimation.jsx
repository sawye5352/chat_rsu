const TypingAnimation = () => {
  return (
    <div className="mb-3 ml-2 flex items-center space-x-2">
      <p>Loading</p>
      <div className="h-1 w-1 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <div className="h-1 w-1 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-blue-600 delay-75"></div>
      <div className="h-1 w-1 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-blue-600 delay-150"></div>
    </div>
  );
};

export default TypingAnimation;
