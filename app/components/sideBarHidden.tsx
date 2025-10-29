"use client";

export default function ToggleMobileTopBar() {
    const el = document.getElementById('mobile-top-bar');
    console.log('Toggling mobile top bar');
    el.classList.toggle('hidden');
}