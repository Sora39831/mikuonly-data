# MikuOnly Data

**中文 | [日本語](#日本語) | [English](#english)**

[MikuOnly / 初音ミク Live Archive](https://mikuonly.com) 使用的公开演唱会、场次与歌单数据仓库。  
本仓库面向社区开放维护，欢迎补充、纠正和验证公开数据。

> 本仓库只保存公开 Catalog 数据。MikuOnly 网站程序、认证、用户数据、VPS 配置及秘密信息均在其他私有仓库中管理。

## 中文

### 收录内容

- `data/events/<event_id>.json` — 演唱会 / 场次信息
- `data/setlists/<event_id>.json` — 对应场次的歌单
- `data/songs/<song_id>.json` — 歌曲主数据与可选 `ja` / `zh` / `en` 显示名称
- `data/series/<series_id>.json` — 演出系列主数据与三语显示名称
- `data/venues/<venue_id>.json` — 会场主数据
- `data/meta.json` — Schema 版本、演唱者、兼容信息等
- `dist/catalog.json` — 自动生成文件，请勿直接编辑

### 如何参与修改

熟悉 GitHub 的用户可以通过 **Fork → 创建分支 → 修改数据 → Pull Request** 提交修正。

如果不熟悉 Git，也可以直接使用 Issues 中的 **Setlist / data correction** 模板报告错误。

对于歌单、曲序、演唱者、日期、会场、歌曲信息等事实性修改，请务必提供用于确认的来源。  
**请勿根据同一巡演或其他场次的内容推测未知数据。** 无法确认的内容应保持未知，而不是补猜。

本地检查：

```bash
npm run check
```

Schema v2 使用**一套稳定 ID + 一套事实数据 + 可选三语显示字段**，不会维护三份独立 Catalog。缺少翻译时网站会回退到原始名称。普通歌单曲名由 `songId` 对应的歌曲翻译统一显示，不要在每个场次重复维护同一首歌的翻译。

更详细的规则请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

### 数据如何发布到 MikuOnly

Pull Request 合并到 `main` 后，mikuonly.com 上的数据**不会立即自动变化**。

MikuOnly 管理端会从指定 commit 导入数据为新的 draft，重新进行校验和确认后，再作为新的 revision 发布。这样可以避免未经复核的数据直接进入线上 Catalog。

---

## 日本語

[MikuOnly / 初音ミク Live Archive](https://mikuonly.com) が利用する、公開のライブ・公演・セットリストデータ repository です。  
コミュニティによるデータの追加・修正・検証を歓迎します。

> この repository には公開 Catalog データのみを置きます。MikuOnly の Web アプリ、認証、ユーザーデータ、VPS 設定、秘密情報は別の private repository で管理しています。

### データ構成

- `data/events/<event_id>.json` — 公演情報
- `data/setlists/<event_id>.json` — その公演のセットリスト
- `data/songs/<song_id>.json` — 楽曲マスタと任意の `ja` / `zh` / `en` 表示名
- `data/series/<series_id>.json` — ライブシリーズのマスタと3言語表示名
- `data/venues/<venue_id>.json` — 会場マスタ
- `data/meta.json` — Schema version、歌唱者、互換情報など
- `dist/catalog.json` — 自動生成物。直接編集しないでください

### 修正に参加する

GitHub に慣れている場合は **Fork → branch 作成 → データ修正 → Pull Request** の流れで提出してください。

Git を使わない場合は、Issues の **Setlist / data correction** template から誤りを報告できます。

セットリスト、曲順、歌唱者、日付、会場、楽曲情報などの事実データを変更する場合は、確認に使用した出典を必ず記載してください。  
**同じツアーや別公演の内容から、未確認データを推測して埋めないでください。** 確認できないものは不明のまま扱います。

ローカル検証：

```bash
npm run check
```

Schema v2 は**1組の stable ID + 1組の事実データ + 任意の3言語表示フィールド**で構成します。翻訳がない場合は canonical / original 名へ fallback します。通常のセットリスト曲名は `songId` の楽曲翻訳から表示するため、各公演に同じ翻訳を重複登録しないでください。

詳細なルールは [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

### MikuOnly への公開フロー

Pull Request が `main` に merge されても、mikuonly.com の公開 Catalog が即座に変更されるわけではありません。

MikuOnly 管理画面が特定 commit のデータを新しい draft として取り込み、再検証・確認したうえで revision として公開します。未確認の変更がそのまま本番データへ入ることを防ぐための仕組みです。

---

## English

This repository contains the public live-event, performance, and setlist data used by [MikuOnly / Hatsune Miku Live Archive](https://mikuonly.com).  
Community contributions are welcome for adding, correcting, and verifying public data.

> Only public catalog data is stored here. The MikuOnly web application, authentication, user data, VPS configuration, and secrets are maintained separately in private repositories.

### Data structure

- `data/events/<event_id>.json` — event / performance information
- `data/setlists/<event_id>.json` — setlist for a performance
- `data/songs/<song_id>.json` — song master data with optional `ja` / `zh` / `en` display titles
- `data/series/<series_id>.json` — live-series master data with localized display names
- `data/venues/<venue_id>.json` — venue master data
- `data/meta.json` — schema version, performers, compatibility metadata, etc.
- `dist/catalog.json` — generated output; do not edit it manually

### Contributing corrections

If you are familiar with GitHub, please use the standard **Fork → create a branch → edit data → Pull Request** workflow.

If you do not use Git, you can report an error through the **Setlist / data correction** Issue template.

For factual changes such as setlists, song order, performers, dates, venues, or song information, please include the source used to verify the correction.  
**Do not infer unknown data from another performance, even within the same tour.** If something cannot be verified, leave it unknown rather than guessing.

Local validation:

```bash
npm run check
```

Schema v2 uses **one stable-ID graph + one factual catalog + optional localized display fields**, not three independent catalogs. Missing translations fall back to the canonical/original value. Normal setlist song names are localized through their `songId`, so the same translation should not be duplicated across performances.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution rules.

### Publication flow

Merging a Pull Request into `main` does **not** immediately change the public catalog on mikuonly.com.

The MikuOnly admin workflow imports data from a selected commit into a new draft, validates it again, and only then publishes it as a new revision. This prevents unreviewed changes from going directly into the production catalog.
