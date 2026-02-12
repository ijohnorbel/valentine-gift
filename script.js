document.addEventListener('DOMContentLoaded', () => {
    const garden = document.getElementById('garden');
    const effects = document.getElementById('effects-container');
    const grass = document.getElementById('grass-container');

    // 1. Plant and Grow Tulips with Leaves
    const positions = [-180, 0, 180];
    positions.forEach((pos, i) => {
        const plant = document.createElement('div');
        plant.className = 'plant';
        plant.style.left = `calc(50% + ${pos}px)`;
        
        plant.innerHTML = `
            <div class="tulip"></div>
            <div class="stem">
                <div class="leaf left"></div>
                <div class="leaf right"></div>
            </div>
        `;
        garden.appendChild(plant);
        
        // Trigger Growth and Background Shift
        setTimeout(() => {
            const h = (i === 1 ? 280 : 220);
            plant.querySelector('.stem').style.height = `${h}px`;
            
            // Show leaves once stem grows
            setTimeout(() => {
                plant.querySelectorAll('.leaf').forEach(l => l.style.opacity = '1');
                document.body.style.backgroundColor = '#1a0a1f'; // Transition to purple
            }, 1000);
        }, 500 * i);
    });

    // 2. High-Flying Butterflies (Restricted to top 40% of screen)
    const butterflyColors = ['#00e5ff', '#ffeb3b', '#ff4d88'];
    for (let i = 0; i < 3; i++) {
        const b = document.createElement('div');
        b.className = 'butterfly';
        b.innerHTML = `<div class="wing left"></div><div class="wing right"></div>`;
        b.querySelectorAll('.wing').forEach(w => w.style.background = butterflyColors[i]);
        effects.appendChild(b);

        b.animate([
            { left: '-10%', top: '15vh' },
            { left: '25%', top: '35vh' },
            { left: '50%', top: '10vh' },
            { left: '75%', top: '30vh' },
            { left: '110%', top: '20vh' }
        ], {
            duration: 12000 + (Math.random() * 4000),
            iterations: Infinity,
            delay: i * 3500
        });
    }

    // 3. Fireflies
    for (let i = 0; i < 30; i++) {
        const f = document.createElement('div');
        f.className = 'firefly';
        f.style.left = Math.random() * 100 + 'vw';
        f.style.top = Math.random() * 100 + 'vh';
        f.style.setProperty('--x', (Math.random() - 0.5) * 400 + 'px');
        f.style.setProperty('--y', (Math.random() - 0.5) * 400 + 'px');
        f.style.setProperty('--d', (8 + Math.random() * 8) + 's');
        effects.appendChild(f);
    }

    // 4. Grass
    for (let i = 0; i < 70; i++) {
        const blade = document.createElement('div');
        blade.className = 'blade';
        blade.style.height = (30 + Math.random() * 40) + 'px';
        blade.style.animationDelay = (Math.random() * 3) + 's';
        grass.appendChild(blade);
    }
});