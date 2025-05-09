# ArchSurf - 建築サイトコレクションランディングページ

ArchSurfは、最先端の建築デザインサイトへのリンクを集めた、視覚的に魅力的でユーザーフレンドリーなランディングページです。建築の海をサーフィンするというコンセプトで、様々な建築関連サイトを簡単に探索できます。

## 機能

- **フィルタリング**: カテゴリー別にサイトを絞り込み表示
- **お気に入り機能**: 気に入ったサイトをブックマーク
- **ダークモード**: ライト/ダークテーマの切り替え
- **共有機能**: SNSでサイトを共有
- **検索機能**: キーワードによるサイト検索
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応

## プロジェクト構成

```
archsurf/
├── css/
│   ├── normalize.css
│   └── styles.css
├── images/
│   ├── hero-architecture.jpg
│   └── sites/
│       ├── dezeen.jpg
│       ├── archdaily.jpg
│       └── ...
├── js/
│   └── app.js
└── index.html
```

## 使用技術

- HTML5
- CSS3
- JavaScript (ES6+)
- レスポンシブWebデザイン
- ローカルストレージ (お気に入り機能用)
- Web Share API (共有機能用)

## デザイン要素

### カラースキーム
- プライマリーカラー: #2C3E50（ダークブルー）
- セカンダリーカラー: #E74C3C（アクセントレッド）
- 中間色: #ECF0F1（ライトグレー）
- テキスト: #333333（ダークグレー）と#FFFFFF（ホワイト）

### タイポグラフィ
- ヘッダー: Montserrat（太字）
- 本文: Open Sans（レギュラー）
- アクセント: Roboto Condensed

## 開始方法

1. リポジトリをクローンまたはダウンロードします
2. `index.html` をブラウザで開きます
3. 建築サイトコレクションを探索します！

## カスタマイズ

サイトコレクションを拡張するには、`js/app.js` 内の `architectureSites` 配列に新しいサイト情報を追加してください。

```javascript
{
  id: [一意のID],
  title: "サイト名",
  description: "サイトの説明",
  imageUrl: "images/sites/[画像ファイル名]",
  siteUrl: "https://example.com/",
  tags: ["タグ1", "タグ2", "タグ3"]
}
```

## 注意事項

サイトを実際に公開する場合は、以下の点に注意してください：

1. 実際のサイトのサムネイル画像を使用する場合は、著作権に注意してください
2. 必要に応じて、各サイトの許可を得ることをお勧めします
3. 画像は最適化してパフォーマンスを向上させてください

## 今後の拡張予定

- ユーザーアカウント機能
- コミュニティによるサイト評価システム
- より詳細なカテゴリーとタグシステム
- パーソナライズされたレコメンデーション機能

---

© 2025 ArchSurf. All rights reserved.
