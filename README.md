# MikuOnly Data

[MikuOnly / 初音ミク Live Archive](https://mikuonly.com) が利用する、公開・コミュニティ編集可能なライブ／セットリストデータです。

このリポジトリには公開 Catalog のみを置きます。Web アプリ、認証、ユーザーデータ、VPS 設定、秘密情報は別の private repository で管理しています。

## データ構成

- `data/events/<event_id>.json` — 公演情報
- `data/setlists/<event_id>.json` — その公演のセットリスト
- `data/songs/<song_id>.json` — 楽曲マスタ
- `data/venues/<venue_id>.json` — 会場マスタ
- `data/meta.json` — シリーズ、歌唱者、互換情報など
- `dist/catalog.json` — 自動生成物。直接編集しないでください

## 修正する

GitHub に慣れている場合は Fork → branch → Pull Request で修正してください。Git を使わない場合は Issues の「Setlist / data correction」から報告できます。

セットリスト、曲順、歌唱者、日付などを変更する PR では、確認に使った出典を必ず記載してください。同じツアーの別公演から曲順を推測しないでください。

ローカル検証:

```bash
npm run check
```

詳細は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

## Publication flow

Pull Request が main に merge されても、mikuonly.com の公開 Catalog が即座に変わるわけではありません。MikuOnly 管理画面が特定 commit のデータを新しい draft として取り込み、再検証してから revision として公開します。
