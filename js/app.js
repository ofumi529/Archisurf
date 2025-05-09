/**
 * ArchSurf - 建築サイトコレクションランディングページ
 * JavaScript機能実装
 */

// サイトデータ
const architectureSites = [
  {
    id: 1,
    title: "Dezeen",
    description: "世界的に人気のある建築・インテリア・デザインマガジンです。建築セクションには、質の高いプロジェクト情報、画像、建築図面を備えた印象的なプロジェクトが数多く掲載されています。デザイナーへのインタビュー、業界の最新トピックに深く迫る編集シリーズ、意見記事、トークやビデオなど、様々な形式のコンテンツが特徴です。",
    imageUrl: "images/sites/dezeen.svg",
    siteUrl: "https://www.dezeen.com/",
    tags: ["magazine", "modern", "international", "design"]
  },
  {
    id: 2,
    title: "ArchDaily",
    description: "建築家や学生の間でよく知られている建築サイトです。写真や図面をキュレーションしたイメージギャラリーを含む、幅広い建築プロジェクトをカバーしています。アカウントを作成してプロジェクトを「フォルダ」に保存し、自分だけの参考資料ライブラリを作ることができます。",
    imageUrl: "images/sites/archdaily.svg",
    siteUrl: "https://www.archdaily.com/",
    tags: ["platform", "projects", "international", "gallery"]
  },
  {
    id: 3,
    title: "Renzo Piano Building Workshop",
    description: "エレガントで長持ちするデザインで知られるRenzo Piano Building Workshopのウェブサイトは、環境に配慮した建築の素晴らしい例を紹介しています。このサイトは、事務所のデザイン理念と代表的な建築物を効果的に紹介している点で、2025年の優れた建築サイトのひとつとされています。",
    imageUrl: "images/sites/rpbw.svg",
    siteUrl: "https://www.rpbw.com/",
    tags: ["architect", "sustainable", "international", "portfolio"]
  },
  {
    id: 4,
    title: "CLB Architects",
    description: "CLB Architectsのウェブサイトは、大胆なシンプルさと没入感のあるビジュアルへの注力が特徴です。ホームページは、完成プロジェクトの印象的な夜景写真をフルワイドで表示し、自然環境と建築を融合させる事務所の卓越した技術を示しています。「場所からのインスピレーション」というタグラインは、コンテキストを重視するデザイン姿勢をさらに強調しています。",
    imageUrl: "images/sites/clb.svg",
    siteUrl: "https://clbarchitects.com/",
    tags: ["architect", "portfolio", "visual", "nature"]
  },
  {
    id: 5,
    title: "Studio MEMM",
    description: "ブラジルの建築事務所Studio MEMMは、ニューヨークの大人向けツリーハウスからガラス張りのファームスクールまで、多様で革新的なデザインポートフォリオをウェブサイトで紹介しています。各プロジェクトのページには大きな特徴的な画像と、プロジェクトの主な動機と課題を説明する明確で魅力的な説明文が掲載されています。",
    imageUrl: "images/sites/memm.svg",
    siteUrl: "https://studiomemm.com/",
    tags: ["architect", "portfolio", "innovative", "international"]
  },
  {
    id: 6,
    title: "Minale + Mann",
    description: "Minale + Mannのウェブサイトは、ミニマリストで合理的なデザインとビジュアルナビゲーションを採用しています。高品質なウェブサイトで、複雑なアニメーションやトランジションを組み込み、ユーザーをサイト全体に案内しています。",
    imageUrl: "images/sites/minale-mann.svg",
    siteUrl: "https://minaleandmann.com/",
    tags: ["architect", "minimalist", "animation", "navigation"]
  },
  {
    id: 7,
    title: "Awwwards - Architecture Collection",
    description: "建築分野のプロフェッショナルにインスピレーションを与え、指針となるよう厳選されたウェブサイトコレクションです。各サイトは美的魅力と優れた機能性で際立ち、シームレスなユーザー体験を保証しています。先進的な検索機能を備え、膨大なポートフォリオや建築プロジェクトをナビゲートしやすくなっています。",
    imageUrl: "images/sites/awwwards.svg",
    siteUrl: "https://www.awwwards.com/websites/architecture/",
    tags: ["collection", "inspiration", "award", "curated"]
  },
  {
    id: 8,
    title: "Bocci",
    description: "2025年ミラノデザインウィークでは、オリオルやフューチャーパーフェクトとのコラボレーションにより、カナダを拠点とする照明ブランドBocciがミラノのアパートメントショールームで、ベッドルームの腰板の上にカリコ・ウォールペーパーの水彩画のような壁紙を使用していました。",
    imageUrl: "images/sites/mobius.svg",
    siteUrl: "https://www.bocci.com/",
    tags: ["design", "lighting", "interior", "exhibition"]
  }
];

// DOM要素
const gridContainer = document.querySelector('.grid-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');
const favoritesToggle = document.getElementById('favorites-toggle');
const favoritesCount = document.querySelector('.favorites-count');
const scrollCta = document.querySelector('.scroll-cta');
const newsletterForm = document.querySelector('.signup-form');

// お気に入りサイトの配列
let favorites = JSON.parse(localStorage.getItem('archsurf-favorites')) || [];

// サイトカードをレンダリングする関数
function renderSites(sites) {
  // グリッドコンテナをクリア
  gridContainer.innerHTML = '';
  
  // サイトごとにカードを作成
  sites.forEach(site => {
    // タグのHTMLを生成
    const tagsHtml = site.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // お気に入りボタンの状態を設定
    const isFavorite = favorites.includes(site.id);
    const favoriteButtonClass = isFavorite ? 'favorite active' : 'favorite';
    
    // カード要素を作成
    const siteCard = document.createElement('div');
    siteCard.className = 'site-card fade-in';
    siteCard.dataset.tags = site.tags.join(',');
    siteCard.dataset.id = site.id;
    
    // カードの内容を設定
    siteCard.innerHTML = `
      <div class="card-image">
        <img src="${site.imageUrl}" alt="${site.title}" loading="lazy">
        <button class="${favoriteButtonClass}" data-id="${site.id}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="card-content">
        <h3>${site.title}</h3>
        <p class="site-description">${site.description}</p>
        <div class="tags">${tagsHtml}</div>
        <div class="card-actions">
          <a href="${site.siteUrl}" class="visit-btn" target="_blank" rel="noopener">サイトを訪問</a>
          <button class="share-btn" data-title="${site.title}" data-url="${site.siteUrl}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="5" r="3" stroke="currentColor" stroke-width="2"/>
              <circle cx="6" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              <circle cx="18" cy="19" r="3" stroke="currentColor" stroke-width="2"/>
              <line x1="9" y1="10.5" x2="15" y2="6.5" stroke="currentColor" stroke-width="2"/>
              <line x1="9" y1="13.5" x2="15" y2="17.5" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    // グリッドコンテナに追加
    gridContainer.appendChild(siteCard);
  });
  
  // お気に入りボタンのイベントリスナーを設定
  document.querySelectorAll('.favorite').forEach(button => {
    button.addEventListener('click', toggleFavorite);
  });
  
  // 共有ボタンのイベントリスナーを設定
  document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', shareSite);
  });
  
  // アニメーション効果を適用
  setTimeout(() => {
    document.querySelectorAll('.site-card').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100);
    });
  }, 100);
}

// フィルター機能
function filterSites(category) {
  // すべてのフィルターボタンからアクティブクラスを削除
  filterButtons.forEach(btn => btn.classList.remove('active'));
  
  // クリックされたボタンにアクティブクラスを追加
  const activeButton = document.querySelector(`.filter-btn[data-category="${category}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
  
  // サイトをフィルタリング
  if (category === 'all') {
    // すべてのサイトを表示
    renderSites(architectureSites);
  } else if (category === 'favorites') {
    // お気に入りのサイトのみ表示
    const favoriteSites = architectureSites.filter(site => favorites.includes(site.id));
    renderSites(favoriteSites);
  } else {
    // 選択されたカテゴリーに一致するサイトを表示
    const filteredSites = architectureSites.filter(site => site.tags.includes(category));
    renderSites(filteredSites);
  }
}

// お気に入り機能
function toggleFavorite(event) {
  const button = event.currentTarget;
  const siteId = parseInt(button.dataset.id);
  
  // お気に入りリストを更新
  if (favorites.includes(siteId)) {
    // お気に入りから削除
    favorites = favorites.filter(id => id !== siteId);
    button.classList.remove('active');
    button.querySelector('svg').setAttribute('fill', 'none');
  } else {
    // お気に入りに追加
    favorites.push(siteId);
    button.classList.add('active');
    button.querySelector('svg').setAttribute('fill', 'currentColor');
  }
  
  // ローカルストレージに保存
  localStorage.setItem('archsurf-favorites', JSON.stringify(favorites));
  
  // お気に入りカウントを更新
  updateFavoritesCount();
}

// お気に入りカウントを更新
function updateFavoritesCount() {
  favoritesCount.textContent = favorites.length;
}

// 共有機能
function shareSite(event) {
  const button = event.currentTarget;
  const title = button.dataset.title;
  const url = button.dataset.url;
  
  // Web Share APIが利用可能かチェック
  if (navigator.share) {
    navigator.share({
      title: `ArchSurf - ${title}`,
      url: url
    }).catch(console.error);
  } else {
    // フォールバック: URLをクリップボードにコピー
    navigator.clipboard.writeText(url).then(() => {
      // コピー成功のフィードバック
      const originalText = button.innerHTML;
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    });
  }
}

// ダークモード切替
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  
  // ローカルストレージに設定を保存
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('archsurf-dark-mode', isDarkMode);
}

// スクロール機能
function scrollToSites() {
  const filterNav = document.querySelector('.filter-nav');
  window.scrollTo({
    top: filterNav.offsetTop,
    behavior: 'smooth'
  });
}

// 検索機能
function searchSites(query) {
  if (!query.trim()) {
    renderSites(architectureSites);
    return;
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  const searchResults = architectureSites.filter(site => {
    return (
      site.title.toLowerCase().includes(normalizedQuery) ||
      site.description.toLowerCase().includes(normalizedQuery) ||
      site.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
    );
  });
  
  renderSites(searchResults);
}

// ニュースレター登録
function handleNewsletterSignup(event) {
  event.preventDefault();
  const emailInput = event.target.querySelector('input[type="email"]');
  const email = emailInput.value;
  
  // 実際のアプリケーションではここでAPIリクエストを送信
  console.log(`ニュースレターに登録: ${email}`);
  
  // 成功メッセージを表示
  const form = event.target;
  const originalContent = form.innerHTML;
  form.innerHTML = '<p class="success-message">ご登録ありがとうございます！</p>';
  
  // フォームを元に戻す
  setTimeout(() => {
    form.innerHTML = originalContent;
    emailInput.value = '';
  }, 3000);
}

// スクロール時のアニメーション
function setupScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// イベントリスナーの設定
function setupEventListeners() {
  // フィルターボタンのイベントリスナー
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      filterSites(category);
    });
  });
  
  // テーマ切替ボタンのイベントリスナー
  themeToggle.addEventListener('click', toggleTheme);
  
  // お気に入りボタンのイベントリスナー
  favoritesToggle.addEventListener('click', () => {
    filterSites('favorites');
  });
  
  // スクロールボタンのイベントリスナー
  scrollCta.addEventListener('click', scrollToSites);
  
  // ニュースレターフォームのイベントリスナー
  newsletterForm.addEventListener('submit', handleNewsletterSignup);
  
  // フッターのフィルターリンクのイベントリスナー
  document.querySelectorAll('.footer-column a[data-filter]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const category = link.dataset.filter;
      filterSites(category);
      window.scrollTo({
        top: document.querySelector('.filter-nav').offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // 検索機能の追加（オプション）
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'サイトを検索...';
  searchInput.className = 'search-input';
  document.querySelector('.filter-nav .container').prepend(searchInput);
  
  searchInput.addEventListener('input', (event) => {
    searchSites(event.target.value);
  });
}

// 初期化関数
function init() {
  // サイトデータをレンダリング
  renderSites(architectureSites);
  
  // お気に入りカウントを更新
  updateFavoritesCount();
  
  // スクロールアニメーションを設定
  setupScrollAnimation();
  
  // イベントリスナーを設定
  setupEventListeners();
  
  // 保存されたテーマ設定を適用
  const savedDarkMode = localStorage.getItem('archsurf-dark-mode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
  }
  
  // ユーザーのシステム設定に基づくダークモード
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode && localStorage.getItem('archsurf-dark-mode') === null) {
    document.body.classList.add('dark-mode');
  }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', init);
