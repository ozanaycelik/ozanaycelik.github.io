# ozanaycelik.github.io

Ozanay Çelik'in kişisel portfolyo / CV sitesi. Build gerektirmeyen statik site (HTML + CSS + JS), GitHub Pages ile yayınlanır.

- Diller: Türkçe, English, Deutsch (sağ üstten değiştirilir, seçim hatırlanır)
- Tema: açık / koyu (ilk açılışta sistem temasını izler)
- "CV'yi yazdır / PDF" butonu sayfayı yazdırma düzeninde CV'ye çevirir

## İçeriği güncelleme

Tüm metinler `assets/js/content.js` içindedir. Her metin `{ tr, en, de }` biçimindedir.

- Projeler: `projects` dizisine yeni bir nesne ekleyin.
- Profil fotoğrafı: `assets/img/profile.jpg` olarak kaydedin; yoksa baş harfler görünür.

## Yerelde çalıştırma

```bash
python -m http.server 5173
```

Ardından http://127.0.0.1:5173/ adresini açın.
