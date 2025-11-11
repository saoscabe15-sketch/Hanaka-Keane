 /* Tambahan untuk JS */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.fade-in {
    opacity: 1;
    transform: translateY(0);
}

.menu-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    margin-left: 10px;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #000;
    padding: 10px;
}

.mobile-menu.active {
    display: flex;
}

body.loaded {
    /* Animasi awal jika diperlukan */
    animation: fadeInBody 0.5s ease-in;
}

@keyframes fadeInBody {
    from { opacity: 0; }
    to { opacity: 1; }
}
