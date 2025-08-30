document.addEventListener('DOMContentLoaded', () => {

    const photos = [
      { id: 6, src: 'images/20230427.jpg', date: '2023-04-27', caption: 'Hoje, sai com o Nicolas. Foi muito incrível. Nós andamos e conversamos, perdemos a noção do tempo. Eu devia ter ido na fisioterapia (minha mãe ficou brava por eu não ter contado), mas fomos na Beira Mar e estava um dia lindo. Fomos ao shopping, dividimos um açaí e passeamos nas lojas. Entramos na livraria e passamos um tempo lá. Fomos para o ponto de ônibus, eu olhava para o céu e via Orion, como se olhasse para nós de volta. A lua estava crescente 🌗 e Vênus brilhava ao lado. Eu queria tocá-lo e abraçá-lo, e acredito que ele também, mas somos muito tímidos. Entramos no ônibus, sentamos perto do fundo. Respirei fundo e encostei minha cabeça em seu ombro, foi breve. Pouco depois, ele me abraçou e acariciou meu braço. Nossas mãos se encontraram e repousei em seu ombro, envolvida em seu abraço.', album: '' },
      // { id: 1, src: 'images/trashed-1735782022-Screenshot_20240513_191003_WhatsApp.jpg', date: '2024-05-13', caption: '', album: 'Nós sendo fofin' },
      // { id: 2, src: 'images/trashed-1737325218-IMG_20241124_191704_582.webp', date: '2024-12-31', caption: '', album: 'Nós sendo fofin' },
      { id: 5, src: 'images/20230406-203652.png', date: '2024-04-06', caption: 'Uma das primeiras chamadas', album: '' },
      { id: 7, src: 'images/20230519a.jpg', date: '2023-05-19', caption: 'Show cover do Queen', album: '' },
      { id: 8, src: 'images/20230523-142116.png', date: '2024-12-31', caption: '', album: 'Nós sendo fofin' },
      { id: 9, src: 'images/20230605.webp', date: '2023-06-05', caption: 'Ganhei a sra. florzinha', album: '' },
      { id: 10, src: 'images/20230606.webp', date: '2023-06-06', caption: 'Ganhei florzinha', album: '' },
      // { id: 11, src: 'images/202306129.jpg', date: '2023-06-12', caption: '', album: '' },
      // { id: 12, src: 'images/202306125.jpg', date: '2023-06-12', caption: '', album: '' },
      { id: 13, src: 'images/20230615-130249.png', date: '2023-06-15', caption: 'Código morse', album: 'Nós sendo fofin' },
      { id: 14, src: 'images/20230617a.webp', date: '2023-06-17', caption: '', album: '' },
      { id: 15, src: 'images/20230617b.webp', date: '2023-06-17', caption: '', album: '' },
      { id: 16, src: 'images/20230617d.webp', date: '2023-06-17', caption: '', album: '' },
      { id: 17, src: 'images/20230621-144808.png', date: '2023-06-21', caption: 'Luuuas', album: 'Nós sendo fofin' },
      { id: 18, src: 'images/20230623_22235.jpg', date: '2023-06-23', caption: 'Finalmente eu cheguei no topo da torre da diversão', album: 'Nós sendo fofin' },
      { id: 19, src: 'images/20230626-174126.png', date: '2023-06-26', caption: 'sombras', album: '' },
      // { id: 20, src: 'images/20230702a.jpg', date: '2023-07-02', caption: '', album: '' },
      { id: 21, src: 'images/20230702a.webp', date: '2024-12-31', caption: '', album: '' },
      // { id: 22, src: 'images/202307026.webp', date: '2024-12-31', caption: '', album: '' },
      { id: 23, src: 'images/20230711.jpg', date: '2023-07-11', caption: '', album: '' },
      { id: 24, src: 'images/20230715b.jpg', date: '2023-07-15', caption: 'SHOW DO ANGRA', album: '' },
      // { id: 25, src: 'images/20230808-35543.jpg', date: '2023-07-27', caption: '', album: '' },
      // { id: 26, src: 'images/20230808-35544.jpg', date: '2023-07-27', caption: '', album: '' },
      // { id: 27, src: 'images/20230808-35545.jpg', date: '2023-07-27', caption: '', album: '' },
      { id: 28, src: 'images/20230808d.jpg', date: '2023-08-08', caption: '', album: '' },
      // { id: 29, src: 'images/202308191.jpg', date: '2023-08-19', caption: '', album: '' },
      { id: 30, src: 'images/20230820a.jpg', date: '2023-08-20', caption: '', album: '' },
      // { id: 31, src: 'images/202308206.jpg', date: '2023-08-20', caption: '', album: '' },
      { id: 33, src: 'images/20230830_175009869_HDR.jpg', date: '2023-08-30', caption: '"Que dia incrível hoje, eu amei sair com vocês e AAAAAAAAAAAAA AGORA TEMOS UMA ALIANÇA 😁🥰AAAAAAAAA EU TÔ MUITO MUITO FELIZ😁Nunca tive tão feliz 🥰 Você fez do melhor jeito possível" É uma das memórias mais bonita que eu tenho. Foi tão fofinho, e o lugar é lindo demais. Vimos o pôr do Sol e a super Lua nascendo. Foi perfeito. E hoje 30/08/2025, que estou escrevendo, dois anos depois do dia dessas fotos...já tem tantas memórias que criamos juntos, tantas que eu não dei conta de por tudo (prometo que vou atualizar). Minha vida se iluminou com você e todos os dias te amo mais. Sei que é você e que sempre será desde que te vi pela primeira vez. Cada momento contigo é feliz e tenho muita sorte de termos nos encontrados. Eu te amo pra sempre❤(eu não me emocionei escrevendo isso não 😭)', album: '30/08/2023' },
      { id: 34, src: 'images/20230830b.webp', date: '2023-08-30', caption: '"Que dia incrível hoje, eu amei sair com vocês e AAAAAAAAAAAAA AGORA TEMOS UMA ALIANÇA 😁🥰AAAAAAAAA EU TÔ MUITO MUITO FELIZ😁Nunca tive tão feliz 🥰 Você fez do melhor jeito possível" É uma das memórias mais bonita que eu tenho. Foi tão fofinho, e o lugar é lindo demais. Vimos o pôr do Sol e a super Lua nascendo. Foi perfeito. E hoje 30/08/2025, que estou escrevendo, dois anos depois do dia dessas fotos...já tem tantas memórias que criamos juntos, tantas que eu não dei conta de por tudo (prometo que vou atualizar). Minha vida se iluminou com você e todos os dias te amo mais. Sei que é você e que sempre será desde que te vi pela primeira vez. Cada momento contigo é feliz e tenho muita sorte de termos nos encontrados. Eu te amo pra sempre❤(eu não me emocionei escrevendo isso não 😭)', album: '30/08/2023' },
      { id: 35, src: 'images/20230830c.jpg', date: '2023-08-30', caption: '"Que dia incrível hoje, eu amei sair com vocês e AAAAAAAAAAAAA AGORA TEMOS UMA ALIANÇA 😁🥰AAAAAAAAA EU TÔ MUITO MUITO FELIZ😁Nunca tive tão feliz 🥰 Você fez do melhor jeito possível" É uma das memórias mais bonita que eu tenho. Foi tão fofinho, e o lugar é lindo demais. Vimos o pôr do Sol e a super Lua nascendo. Foi perfeito. E hoje 30/08/2025, que estou escrevendo, dois anos depois do dia dessas fotos...já tem tantas memórias que criamos juntos, tantas que eu não dei conta de por tudo (prometo que vou atualizar). Minha vida se iluminou com você e todos os dias te amo mais. Sei que é você e que sempre será desde que te vi pela primeira vez. Cada momento contigo é feliz e tenho muita sorte de termos nos encontrados. Eu te amo pra sempre❤(eu não me emocionei escrevendo isso não 😭)', album: '30/08/2023' },
      { id: 36, src: 'images/20230830c.webp', date: '2023-08-30', caption: '"Que dia incrível hoje, eu amei sair com vocês e AAAAAAAAAAAAA AGORA TEMOS UMA ALIANÇA 😁🥰AAAAAAAAA EU TÔ MUITO MUITO FELIZ😁Nunca tive tão feliz 🥰 Você fez do melhor jeito possível" É uma das memórias mais bonita que eu tenho. Foi tão fofinho, e o lugar é lindo demais. Vimos o pôr do Sol e a super Lua nascendo. Foi perfeito. E hoje 30/08/2025, que estou escrevendo, dois anos depois do dia dessas fotos...já tem tantas memórias que criamos juntos, tantas que eu não dei conta de por tudo (prometo que vou atualizar). Minha vida se iluminou com você e todos os dias te amo mais. Sei que é você e que sempre será desde que te vi pela primeira vez. Cada momento contigo é feliz e tenho muita sorte de termos nos encontrados. Eu te amo pra sempre❤(eu não me emocionei escrevendo isso não 😭)', album: '30/08/2023' },
      { id: 37, src: 'images/20230830g.webp', date: '2023-08-30', caption: '"Que dia incrível hoje, eu amei sair com vocês e AAAAAAAAAAAAA AGORA TEMOS UMA ALIANÇA 😁🥰AAAAAAAAA EU TÔ MUITO MUITO FELIZ😁Nunca tive tão feliz 🥰 Você fez do melhor jeito possível" É uma das memórias mais bonita que eu tenho. Foi tão fofinho, e o lugar é lindo demais. Vimos o pôr do Sol e a super Lua nascendo. Foi perfeito. E hoje 30/08/2025, que estou escrevendo, dois anos depois do dia dessas fotos...já tem tantas memórias que criamos juntos, tantas que eu não dei conta de por tudo (prometo que vou atualizar). Minha vida se iluminou com você e todos os dias te amo mais. Sei que é você e que sempre será desde que te vi pela primeira vez. Cada momento contigo é feliz e tenho muita sorte de termos nos encontrados. Eu te amo pra sempre❤(eu não me emocionei escrevendo isso não 😭)', album: '30/08/2023' },
      { id: 38, src: 'images/20230830h.png', date: '2023-08-30', caption: '"Que dia incrível hoje, eu amei sair com vocês e AAAAAAAAAAAAA AGORA TEMOS UMA ALIANÇA 😁🥰AAAAAAAAA EU TÔ MUITO MUITO FELIZ😁Nunca tive tão feliz 🥰 Você fez do melhor jeito possível" É uma das memórias mais bonita que eu tenho. Foi tão fofinho, e o lugar é lindo demais. Vimos o pôr do Sol e a super Lua nascendo. Foi perfeito. E hoje 30/08/2025, que estou escrevendo, dois anos depois do dia dessas fotos...já tem tantas memórias que criamos juntos, tantas que eu não dei conta de por tudo (prometo que vou atualizar). Minha vida se iluminou com você e todos os dias te amo mais. Sei que é você e que sempre será desde que te vi pela primeira vez. Cada momento contigo é feliz e tenho muita sorte de termos nos encontrados. Eu te amo pra sempre❤(eu não me emocionei escrevendo isso não 😭)', album: '30/08/2023' },
      // { id: 39, src: 'images/20230908-031852-2.png', date: '2024-12-31', caption: '', album: '' },
      { id: 40, src: 'images/20230917-WA0006.jpg', date: '2024-09-17', caption: 'Nós em BC', album: 'Balneário Camboriú' },
      { id: 41, src: 'images/20230917-WA0009.jpg', date: '2024-09-17', caption: 'Nós em BC', album: 'Balneário Camboriú' },
      { id: 42, src: 'images/20230917-WA0010.jpg', date: '2024-09-17', caption: 'Nós em BC', album: 'Balneário Camboriú' },
      // { id: 43, src: 'images/20231018-WA0120.mp4', date: '2024-12-31', caption: '', album: '' },
      { id: 44, src: 'images/20231229_194712.jpg', date: '2023-12-29', caption: '', album: '' },
      { id: 45, src: 'images/20231231_223514.jpg', date: '2023-12-31', caption: '', album: '' },
      { id: 46, src: 'images/20240316_144355.jpg', date: '2024-01-27', caption: '', album: '' },
      { id: 48, src: 'images/20240811.jpg', date: '2024-08-11', caption: '', album: 'Dia em Sambaqui' },
      { id: 49, src: 'images/20240831.jpg', date: '2024-12-31', caption: '', album: '31/08/2024' },
      { id: 50, src: 'images/363583458-IMG-20230518-WA0020.jpg', date: '2024-12-31', caption: '', album: 'Nós sendo fofin' },
      { id: 51, src: 'images/1090680966-IMG-20230703-WA0000.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 52, src: 'images/1472536979-IMG-20230830-WA0008.jpg', date: '2024-12-31', caption: '', album: '30/08/2023' },
      { id: 53, src: 'images/1608858884-IMG-20230707-WA0002.jpg', date: '2024-12-31', caption: '', album: '' },
      // { id: 54, src: 'images/AirBrush_20240811223448-2.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 55, src: 'images/IMG_20240804_173452357_HDR.jpg', date: '2025-07-08', caption: '', album: '' },
      { id: 56, src: 'images/IMG_20240804_173455322_HDR.jpg', date: '2024-08-04', caption: '', album: '' },
      { id: 57, src: 'images/IMG_20240811_173552596_HDR.jpg', date: '2024-08-11', caption: '', album: 'Dia em Sambaqui' },
      { id: 58, src: 'images/IMG_20240831_002554779_HDR.jpg', date: '2024-08-31', caption: '', album: '31/08/2024' },
      { id: 59, src: 'images/IMG_20241123_204235061~2.jpg', date: '2024-11-23', caption: '', album: '' },
      { id: 60, src: 'images/IMG_20241124_191704_582.webp', date: '2024-12-31', caption: '', album: '' },
      { id: 61, src: 'images/IMG_20241205_192554241.jpg', date: '2024-12-05', caption: '', album: '' },
      { id: 62, src: 'images/IMG_20241208_204014747.jpg', date: '2024-12-08', caption: '', album: '' },
      { id: 63, src: 'images/IMG_20250106_130142835_HDR.jpg', date: '2025-01-06', caption: '', album: '' },
      { id: 64, src: 'images/IMG_20250111_154035148.jpg', date: '2025-01-11', caption: '', album: '' },
      { id: 65, src: 'images/IMG_20250525_120811756_HDR_AE.jpg', date: '2025-05-25', caption: '', album: 'Viagem Joinville' },
      { id: 69, src: 'images/IMG_20250621_211844711.jpg', date: '1980-01-01', caption: '', album: '' },
      { id: 70, src: 'images/IMG_20250823_184359446.jpg', date: '2025-08-23', caption: '', album: '' },
      { id: 71, src: 'images/IMG-20230710-WA0010.jpg', date: '2024-12-31', caption: '', album: 'Nós sendo fofin' },
      { id: 72, src: 'images/IMG-20230823-WA0014.jpg', date: '2024-12-31', caption: '', album: 'Nós sendo fofin' },
      { id: 73, src: 'images/IMG-20230906-WA0000.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 74, src: 'images/IMG-20230908-WA0003.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 75, src: 'images/IMG-20231009-WA0004.jpg', date: '2023-10-09', caption: 'O famoso neurônio espelho', album: '' },
      { id: 76, src: 'images/IMG-20231025-WA0000.jpg', date: '2024-12-31', caption: '', album: 'Nós sendo fofin' },
      { id: 77, src: 'images/IMG-20240408-WA0008.jpg', date: '2024-05-13', caption: '', album: '' },
      { id: 78, src: 'images/IMG-20240630-WA0005.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 79, src: 'images/IMG-20240807-WA0024.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 80, src: 'images/IMG-20240807-WA0025.jpg', date: '2024-12-31', caption: '', album: '' },
      // { id: 81, src: 'images/IMG-20241103-WA0028-2.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 82, src: 'images/IMG-20241201-WA0001.jpg', date: '2024-12-31', caption: '', album: '' },
      { id: 83, src: 'images/IMG-20250309-WA0007.jpg', date: '1980-01-01', caption: '', album: 'Despedida e CARBONARA' },
      { id: 84, src: 'images/IMG-20250309-WA0008.jpg', date: '1980-01-01', caption: '', album: 'Despedida e CARBONARA' },
      { id: 85, src: 'images/IMG-20250309-WA0009.jpg', date: '1980-01-01', caption: '', album: 'Despedida e CARBONARA' },
      { id: 86, src: 'images/IMG-20250403-WA0029.jpg', date: '1980-01-01', caption: '', album: 'Nós sendo fofin' },
      { id: 87, src: 'images/IMG-20250610-WA0001.jpg', date: '1980-01-01', caption: 'A GENTE CORRENDO PRA TIRAR FOTO. Conseguimos com o Andreoli', album: 'Viagem Curitiba' },
      // { id: 89, src: 'images/Ιν_0_20240828214738-3.mp4', date: '2024-12-31', caption: '', album: '' },
      { id: 93, src: 'images/Screenshot_20231201-143826.png', date: '2024-12-31', caption: '', album: 'Nós sendo fofin' },
      { id: 94, src: 'images/Screenshot_20231218_140058_Instagram.jpg', date: '2023-12-18', caption: '', album: 'Balneário Camboriú' },
      { id: 95, src: 'images/Screenshot_20240504_084400_Instagram.jpg', date: '2024-05-04', caption: '', album: 'Nós sendo fofin' },
      { id: 96, src: 'images/Screenshot_20240510_022412_WhatsApp.jpg', date: '2024-05-10', caption: '', album: 'Nós sendo fofin' },
      { id: 97, src: 'images/Screenshot_20250624-171702.png', date: '1980-01-01', caption: '', album: '' },
      { id: 98, src: 'images/Screenshot_20250624-171717.png', date: '1980-01-01', caption: '', album: 'Balneário Camboriú' },
      { id: 99, src: 'images/Screenshot_20250624-171730.png', date: '2023-08-30', caption: '"Que dia incrível hoje, eu amei sair com vocês e AAAAAAAAAAAAA AGORA TEMOS UMA ALIANÇA 😁🥰AAAAAAAAA EU TÔ MUITO MUITO FELIZ😁Nunca tive tão feliz 🥰 Você fez do melhor jeito possível" É uma das memórias mais bonita que eu tenho. Foi tão fofinho, e o lugar é lindo demais. Vimos o pôr do Sol e a super Lua nascendo. Foi perfeito. E hoje 30/08/2025, que estou escrevendo, dois anos depois do dia dessas fotos...já tem tantas memórias que criamos juntos, tantas que eu não dei conta de por tudo (prometo que vou atualizar). Minha vida se iluminou com você e todos os dias te amo mais. Sei que é você e que sempre será desde que te vi pela primeira vez. Cada momento contigo é feliz e tenho muita sorte de termos nos encontrados. Eu te amo pra sempre❤(eu não me emocionei escrevendo isso não 😭)', album: '30/08/2023'  },
        { id: 2, src: 'images/IMG_20250608_162241_850.webp', date: '2025-06-08', caption: 'Show do Kiko e Marty', album: 'Viagem Curitiba' },
        { id: 3, src: 'images/IMG_20250608_202151531.jpg', date: '2025-06-08', caption: 'Show do Kiko e Marty', album: 'Viagem Curitiba' },
        { id: 4, src: 'images/IMG_20250525_122129701.jpg', date: '2025-05-25', caption: 'Mirante', album: 'Viagem Joinville' },
        { id: 5, src: 'images/IMG_20250525_122147454.jpg', date: '2025-05-25', caption: 'Mirante', album: 'Viagem Joinville' },
        { id: 6, src: 'images/IMG_20250525_122737724.jpg', date: '2025-05-25', caption: 'Mirante', album: 'Viagem Joinville' },
      ];
        
        const gallery = document.getElementById('gallery');
        const albumsContainer = document.getElementById('albums');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');
        const modalInfo = document.getElementById('modalInfo');
        const closeModalBtn = document.getElementById('closeModal');
      
        const filterText = document.getElementById('nameFilter');
        const filterDate = document.getElementById('dateFilter');
      
        // Cria elemento da foto (retorna null se foto inválida)
        function createPhotoElement(photo) {
          if (!photo || !photo.src) return null;
          const img = document.createElement('img');
          img.src = photo.src;
          img.alt = photo.caption || '';
          img.dataset.date = photo.date || '';
          img.dataset.album = photo.album || '';
          img.addEventListener('click', () => openModal(photo));
          return img;
        }
      
        // Galeria principal -> só fotos sem album (album == '' ou só espaços)
        function renderGallery() {
          gallery.innerHTML = '';
          const generalPhotos = photos.filter(p => !p.album || p.album.toString().trim() === '');
          generalPhotos.forEach(p => {
            const el = createPhotoElement(p);
            if (el) gallery.appendChild(el);
          });
        }
      
        // Álbuns -> pega nomes únicos não vazios e cria seção para cada um
        function renderAlbums() {
          albumsContainer.innerHTML = '';
      
          // nomes únicos, removendo entradas vazias
          const albumNames = [...new Set(
            photos
              .map(p => (p.album || '').toString().trim())
              .filter(name => name !== '')
          )];
      
          albumNames.forEach(albumName => {
            const albumDiv = document.createElement('div');
            albumDiv.className = 'album';
      
            // título como H2 (usa seu CSS de h2)
            const title = document.createElement('h2');
            title.textContent = albumName;
            title.className = 'album-title';
      
            const photosDiv = document.createElement('div');
            photosDiv.className = 'album-photos';
      
            photos
              .filter(p => (p.album || '').toString().trim() === albumName)
              .forEach(p => {
                const el = createPhotoElement(p);
                if (el) photosDiv.appendChild(el);
              });
      
            albumDiv.appendChild(title);
            albumDiv.appendChild(photosDiv);
            albumsContainer.appendChild(albumDiv);
          });
        }
      
        // Modal
        function openModal(photo) {
          if (!photo) return;
          if (modal) modal.style.display = 'flex';
          if (modalImg) modalImg.src = photo.src;
          if (modalInfo) modalInfo.textContent = `${photo.date || ''} — ${photo.caption || ''}`;
        }
        if (closeModalBtn) closeModalBtn.addEventListener('click', () => { if (modal) modal.style.display = 'none'; });
        if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
      
        // Filtros (mantive sua lógica)
        // function applyFilters() {
        //   const text = (filterText && filterText.value) ? filterText.value.toLowerCase() : '';
        //   const date = filterDate ? filterDate.value : '';
      
        //   document.querySelectorAll('.gallery img, .album-photos img').forEach(img => {
        //     const alt = (img.alt || '').toLowerCase();
        //     const album = (img.dataset.album || '').toLowerCase();
        //     const matchText = alt.includes(text) || album.includes(text);
        //     const matchDate = !date || img.dataset.date === date;
        //     img.style.display = (matchText && matchDate) ? '' : 'none';
        //   });
        // }
        // if (filterText) filterText.addEventListener('input', applyFilters);
        // if (filterDate) filterDate.addEventListener('input', applyFilters);
      
        // Inicializa: galeria geral primeiro, depois álbuns
        renderGallery();
        renderAlbums();
      
      });
      