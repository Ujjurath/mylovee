document.addEventListener('DOMContentLoaded', () => {
    const loveReasons = [
        "You always know how to make me smile.",
        "You are my best friend.",
        "You have a beautiful heart.",
        "You support me in everything I do.",
        "You are my rock.",
        "Your kindness is inspiring.",
        "You make me a better person.",
        "You are my home.",
        "You have a great sense of humor.",
        "You are incredibly talented.",
        "You are always there for me.",
        "You are my soulmate.",
        "You light up my life.",
        "You are my everything.",
        "You have a wonderful smile.",
        "You make every day better.",
        "You are my partner in crime.",
        "You are my dream come true.",
        "You are my forever.",
        "You are my one and only.",
        "You are my sunshine.",
        "You are my heart.",
        "You are my love.",
        "You are my life.",
        "You are my best adventure.",
        "You are my favorite person.",
        "You are my greatest gift.",
        "You are my sweetest memory.",
        "You are my happiest moment.",
        "You are my brightest star.",
        "You are my perfect match.",
        "You are my treasure.",
        "You are my inspiration.",
        "You are my confidant.",
        "You are my joy.",
        "You are my love story.",
        "You are my heart's desire.",
        "You are my forever and always.",
        "You are my miracle.",
        "You are my strength.",
        "You are my peace.",
        "You are my love song.",
        "You are my happy place.",
        "You are my heart's delight.",
        "You are my destiny.",
        "You are my love of a lifetime.",
        "You are my everything and more.",
        "You are my beautiful dream.",
        "You are my endless love.",
        "You are my heart's beat.",
        "You are my love at first sight.",
        "You are my forever love."
    ];

    const loveReasonsList = document.getElementById('love-reasons');
    loveReasons.forEach(reason => {
        const listItem = document.createElement('li');
        listItem.textContent = reason;
        loveReasonsList.appendChild(listItem);
    });
});