if (selected === correct) {
  btn.classList.add("correct");
  score += 20;
  feedbackDiv.innerText = "Selamat!";
  feedbackDiv.classList.add("correct-animation");

  // MAIN SUARA BENAR
  const correctSound = document.getElementById("soundscorrect");
  correctSound.currentTime = 0;
  correctSound.play().catch(e => console.log("Gagal putar suara benar:", e.message));

} else {
  btn.classList.add("wrong");
  buttons.forEach(b => {
    if (b.textContent === correct) {
      b.classList.add("correct");
    }
  });
  feedbackDiv.innerText = "Coba Lagi!";
  feedbackDiv.classList.add("wrong-animation");

  // MAIN SUARA SALAH
  const wrongSound = document.getElementById("soundswrong");
  wrongSound.currentTime = 0;
  wrongSound.play().catch(e => console.log("Gagal putar suara salah:", e.message));
}
