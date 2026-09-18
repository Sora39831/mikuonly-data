# Contributing

MikuOnly のデータ修正に協力していただきありがとうございます。

## 基本ルール

1. 1つの PR は、できるだけ1つの公演または1つの論点に絞ってください。
2. セットリスト、曲順、歌唱者、開催日などの変更には出典を付けてください。
3. 別公演のセットリストから「たぶん同じ」と推測して埋めないでください。不明は不明のまま残します。
4. 既存の `event id`、`song id`、`setlist item id` は、誤り訂正のために並び順が変わっても変更しないでください。
5. `dist/catalog.json` は直接編集しません。編集するのは `data/` 以下です。

## Pull Request の流れ

1. この repository を Fork
2. 作業 branch を作成
3. `data/` を修正
4. `npm run check` を実行
5. PR template に変更理由と Source を記入
6. CI が通った状態で review を待つ

管理者が review し、必要なら Request changes を返します。merge 後も本番反映前に MikuOnly 側で別途 draft / validation / publish を行います。

## 削除について

公開済みの公演・楽曲・会場そのものの削除は、コミュニティ同期では自動適用されません。誤登録の削除が必要な場合は Issue で理由と出典を提示してください。

## Source examples

公式サイト、公式 SNS、Blu-ray/DVD の曲目、公式配信・映像、信頼できる現地記録などを優先します。URL がない資料の場合は、PR/Issue に資料の種類と確認箇所を説明してください。
