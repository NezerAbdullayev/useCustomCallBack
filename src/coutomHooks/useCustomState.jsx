const MyReact = (function () {
  let stateStorage = []; // State-ləri saxlayır
  let stateIndex = 0; // Hər komponent üçün index

  function useState(initialValue) {
    const currentIndex = stateIndex; // State-in index-i

    // İlk dəfə state yaradılırsa, initial dəyəri saxla
    if (stateStorage[currentIndex] === undefined) {
      stateStorage[currentIndex] = initialValue;
    }

    // State-i yeniləyən funksiya
    function setState(newValue) {
      stateStorage[currentIndex] =
        typeof newValue === "function"
          ? newValue(stateStorage[currentIndex])
          : newValue;

      render(); // React-də burada komponenti yenidən render edən funksiya çağırılmalıdır
    }

    stateIndex++; // Hər yeni state üçün index artır

    return [stateStorage[currentIndex], setState];
  }

  function resetIndex() {
    stateIndex = 0; // Hər renderdən əvvəl sıfırlanmalıdır
  }

  function render() {
    console.clear(); // Konsolu təmizləyək ki, renderlər aydın görünsün
    console.log("Component re-render with new state:", stateStorage);
    App(); // Yenidən render etmək üçün komponent çağırılır (React bunu özü avtomatik edir)
  }

  return { useState, resetIndex, render };
})();
