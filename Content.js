
   function sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    sleep(1000).then(() => {
      document.querySelector("[aria-label~=إعجابه]").click();
    });

