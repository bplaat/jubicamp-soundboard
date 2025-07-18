// Utils
let seed = 1;
function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Sounds
const sounds = [
    { name: 'Alarm', url: 'sounds/alarm.mp3', category: 'sfx' },
    { name: 'Bass drop', url: 'sounds/bass-drop.mp3', category: 'sfx' },
    { name: 'Boom', url: 'sounds/boom.mp3', category: 'sfx' },
    { name: 'Bruh', url: 'sounds/bruh.mp3', category: 'sfx' },
    { name: 'Horn', url: 'sounds/horn.m4a', category: 'sfx' },
    { name: 'Ahh', url: 'sounds/ahh.m4a', category: 'sfx' },
    { name: 'Ahh run', url: 'sounds/ahh-run.m4a', category: 'short' },
    { name: 'Wait what the hell', url: 'sounds/wait.m4a', category: 'short' },
    { name: 'Boink', url: 'sounds/bonk.mp3', category: 'sfx' },
    { name: 'Clang', url: 'sounds/clang.mp3', category: 'sfx' },
    { name: 'Clang Mega', url: 'sounds/clang-mega.mp3', category: 'sfx' },
    { name: 'Russian Hard Bass', url: 'sounds/hard-bass.mp3', category: 'short' },
    { name: 'Biem', url: 'sounds/biem.mp3', category: 'sfx' },
    { name: 'Acid Wonker Bonker', url: 'sounds/wonker-bonker.mp3', category: 'short' },
    { name: 'Unox Theme', url: 'sounds/unox-theme.mp3', category: 'short' },
    { name: 'iOS Marimba Phone', url: 'sounds/marimba.mp3', category: 'short' },
    { name: 'Samsung Alert', url: 'sounds/samsung-alert.mp3', category: 'short' },
    { name: 'Age of Empires Wololo', url: 'sounds/wololo.mp3', category: 'sfx' },
    { name: 'Roblox Oof', url: 'sounds/roblox-oof.mp3', category: 'sfx' },
    { name: 'Fart', url: 'sounds/fart.mp3', category: 'sfx' },
    { name: 'Discord Notification', url: 'sounds/discord-notification.mp3', category: 'short' },
    { name: 'Discord Call', url: 'sounds/discord-call.mp3', category: 'short' },
    { name: 'Your computer has virus', url: 'sounds/virus.mp3', category: 'short' },
    { name: 'Windows XP Startup', url: 'sounds/windows-xp-startup.mp3', category: 'short' },
    { name: 'Windows XP Shutdown', url: 'sounds/windows-xp-shutdown.mp3', category: 'short' },
    { name: 'Windows XP Error', url: 'sounds/windows-xp-error.mp3', category: 'short' },
    { name: 'A few moments later', url: 'sounds/moments-later.m4a', category: 'time' },
    { name: '5 hours later', url: 'sounds/5-hours-later.m4a', category: 'time' },
    { name: '2000 years later', url: 'sounds/2000-years-later.m4a', category: 'time' },
    { name: 'Crickets', url: 'sounds/crickets.m4a', category: 'short' },
    { name: 'Steek aan dat ding', url: 'sounds/steek-aan.m4a', category: 'short' },
    { name: 'What the helly', url: 'sounds/wthelly.m4a', category: 'short' },
    { name: 'Among Us Reveal', url: 'sounds/among-us-reveal.mp3', category: 'short' },
    { name: 'Fortnite Dance', url: 'sounds/fortnite-dance.mp3', category: 'game' },
    { name: 'Fortnite Knocked', url: 'sounds/fortnite-knocked.mp3', category: 'game' },
    { name: 'Mario Kart Here we go!', url: 'sounds/mario-kart-here-we-go.m4a', category: 'game' },
    { name: 'Mario Kart Failure', url: 'sounds/mario-kart-failure.m4a', category: 'game' },
    { name: 'Sitcom we will be back', url: 'sounds/sitcom.m4a', category: 'short' },
    { name: 'Breaking News', url: 'sounds/breaking-news.mp3', category: 'short' },
    { name: 'Entering Heaven', url: 'sounds/heaven.mp3', category: 'short' },
    { name: 'Playstation 1 startup', url: 'sounds/ps1-startup.m4a', category: 'short' },
    { name: 'Playstation 2 startup', url: 'sounds/ps2-startup.m4a', category: 'short' },
    { name: 'Gamecube startup', url: 'sounds/gamecube-startup.m4a', category: 'short' },
    { name: 'NDS startup', url: 'sounds/nds-startup.m4a', category: 'short' },
    { name: 'Apple startup', url: 'sounds/apple-startup.m4a', category: 'short' },
    { name: 'Mission Failed', url: 'sounds/mission-failed.mp3', category: 'game' },
    { name: 'Terrorists win', url: 'sounds/terrorists-win.mp3', category: 'game' },
    { name: 'Wilhelm scream', url: 'sounds/scream.mp3', category: 'short' },
    { name: 'Wow', url: 'sounds/wow.mp3', category: 'short' },
    { name: 'Sad Violin', url: 'sounds/sad-violin.mp3', category: 'short' },
    { name: 'Buurman en Buurman', url: 'sounds/buurman-en-buurman.mp3', category: 'sfx' },
    { name: 'Goofy Car', url: 'sounds/goofy-car.mp3', category: 'short' },
    { name: 'NS Ding Dong', url: 'sounds/ns-ding-dong.mp3', category: 'sfx' },
    { name: 'Italian Brainrot Ringtone', url: 'sounds/italian-brainrot-ringtone.mp3', category: 'short' },
    { name: 'Jubicamp Lied', url: 'sounds/jubicamp-lied.mp3', category: 'long' },
    { name: 'Dial Up', url: 'sounds/dail-up.m4a', category: 'long' },
    { name: 'Multiverse', url: 'sounds/multiverse.m4a', category: 'long' },
    { name: 'Time Warp', url: 'sounds/time-warp.m4a', category: 'long' },
    { name: 'Mii Channel', url: 'sounds/mii.m4a', category: 'long' },
    { name: 'Elevator', url: 'sounds/elevator.m4a', category: 'long' },
    { name: 'Wii Homebrew Channel', url: 'sounds/homebrew-channel.m4a', category: 'long' },
    { name: 'Slagroombus', url: 'sounds/slagroombus.m4a', category: 'short' },
];
sounds.sort((a, b) => a.name.localeCompare(b.name));
sounds.sort((a, b) => a.category.localeCompare(b.category));

const searchInput = document.getElementById('soundsSearch');
const soundsContainer = document.getElementById('sounds');
function createButton(sound) {
    const btn = document.createElement('button');
    btn.textContent = `${sound.name} (${sound.category})`;
    btn.style.backgroundColor = `hsl(${Math.floor(random() * 360)}, 70%, 40%)`;
    btn.addEventListener('click', () => new Audio(sound.url).play());
    return btn;
}
function renderSounds(filter = '') {
    soundsContainer.innerHTML = '';
    const filtered = sounds.filter((sound) => sound.name.toLowerCase().includes(filter.toLowerCase()));
    for (const sound of filtered) {
        soundsContainer.appendChild(createButton(sound));
    }
}
searchInput.addEventListener('input', () => renderSounds(searchInput.value));
renderSounds();

// Robot voice
document.getElementById('robotSpeakButton').addEventListener('click', function () {
    const text = document.getElementById('robotText').value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl';
    window.speechSynthesis.speak(utterance);
});
