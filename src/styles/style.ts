export const backgroundImage = () => {
  return {
    blur: 20,
    opacity: 1,
    backgroundImage:
      "url(/assets/background/cyan-blur.png), url(/assets/background/red-blur.png)",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "top right, left bottom",
    backgroundSize: "50%, 50%",
  };
};
