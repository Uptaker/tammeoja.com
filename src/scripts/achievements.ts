const achievements = {
  'trusty-hardware': { name: 'Trusty Hardware', description: 'Pick up the crowbar.' },
  'unforeseen-consequences': { name: 'Unforeseen Consequences', description: 'Break the chamber monitor.' },
  'no-hard-feelings': { name: 'No Hard Feelings', description: 'Replay the turret incident.' },
  'valve-time': { name: 'Valve Time', description: 'Turn the old valve.' },
  'companion': { name: 'Will Never Threaten to Stab You', description: 'Spend some quality time with the companion cube.' },
  'thinking-with-portals': { name: 'Now You’re Thinking With Portals', description: 'Use both portals.' },
  'what-cat': { name: 'What Cat?', description: 'Find the cats.' },
  'cake': { name: 'The Cake Is a Lie', description: 'Ask the console for cake.' },
  'lab-rat': { name: 'Lab Rat', description: 'Find the Rat Man’s den.' },
};

export type AchievementId = keyof typeof achievements;

const storageKey = 'aperture-achievements';
const total = Object.keys(achievements).length;
const queue: { name: string; description: string; progress: string }[] = [];
let toast: HTMLElement | null = null;
let showing = false;

const read = (): string[] => {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
};

const write = (ids: string[]) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(ids));
  } catch {}
};

const createToast = () => {
  const element = document.createElement('div');
  element.className = 'achievement-toast';
  element.setAttribute('popover', 'manual');
  element.setAttribute('role', 'status');
  element.innerHTML = '<svg class="achievement-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 49.7 11.6 41.1 24.1 33.7 20.1Z M51.1 12.9 58.9 30.1 44 32.8 41.6 24.8Z M59 32 52.4 49.7 39.9 41.1 43.9 33.7Z M51.1 51.1 33.9 58.9 31.2 44 39.2 41.6Z M32 59 14.3 52.4 22.9 39.9 30.3 43.9Z M12.9 51.1 5.1 33.9 20 31.2 22.4 39.2Z M5 32 11.6 14.3 24.1 22.9 20.1 30.3Z M12.9 12.9 30.1 5.1 32.8 20 24.8 22.4Z"/></svg><div class="achievement-text"><small></small><strong></strong><span></span></div>';
  document.body.append(element);
  return element;
};

const showNext = () => {
  const next = queue.shift();
  if (!next) {
    showing = false;
    return;
  }
  showing = true;
  toast ??= createToast();
  if (typeof toast.showPopover === 'function') {
    if (toast.matches(':popover-open')) toast.hidePopover();
    toast.showPopover();
  }
  toast.querySelector('small')!.textContent = `ACHIEVEMENT UNLOCKED · ${next.progress}`;
  toast.querySelector('strong')!.textContent = next.name;
  toast.querySelector('span')!.textContent = next.description;
  toast.classList.remove('is-visible');
  void toast.offsetWidth;
  toast.classList.add('is-visible');
  window.setTimeout(() => {
    toast?.classList.remove('is-visible');
    window.setTimeout(() => {
      if (!queue.length && toast?.matches(':popover-open')) toast.hidePopover();
      showNext();
    }, 450);
  }, 4600);
};

export const unlock = (id: AchievementId) => {
  const unlocked = read();
  if (unlocked.includes(id)) return;
  unlocked.push(id);
  write(unlocked);
  const found = unlocked.filter((key) => key in achievements).length;
  queue.push({ ...achievements[id], progress: `${found}/${total}` });
  if (found === total) queue.push({ name: 'Partygoer', description: 'Find every secret in the facility.', progress: `${total}/${total}` });
  if (!showing) showNext();
};
