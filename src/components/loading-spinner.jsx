const LoadingSpinner = () => {

  return (
    <div className="col-span-full text-center h-screen flex place-items-center">
      <div className="animate-spin rounded-full size-20 border-b-2 border-primary mx-auto" />
    </div>
  );
};

export default LoadingSpinner;
