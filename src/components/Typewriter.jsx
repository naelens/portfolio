import { useEffect, useState, useMemo } from "react";

export function Typewriter() {
    const words = useMemo(
        () => ["Olá,", "Eu sou a Naelem.", "Bem vindo ao meu site!"],
        [] 
    );
    const [currentWord, setCurrentWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      const handleTyping = () => {
        const word = words[wordIndex];
        
        if (isDeleting) {
          setCurrentWord(word.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
  
          if (charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          setCurrentWord(word.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
  
          if (charIndex === word.length) {
            setIsDeleting(true);
          }
        }
      };
  
      const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);
  
      return () => clearTimeout(timer); 
    }, [charIndex, isDeleting, wordIndex, words]);
  
    return (
      <div>
        {currentWord}
        <span style={{ borderRight: "2px solid black", marginLeft: "2px" }}></span>
      </div>
    );
}