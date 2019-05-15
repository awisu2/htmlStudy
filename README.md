# html study

sassフォルダは、sassコマンドに依存して利用することができる。

sass comvert
------------

`docker-compose up` or `sass --watch sass:css --style compressed`

### if not run watch

`docker-compose run sass sass sass/style.scss:css/style.css`

### sass command install

`sudo gem install sass`

bemの使い方について
================

- パーツ化した場合の命名方法について
    - 特定の意味ある区分の場合
    - Blockから始めるのはどうか？
        - いいと思う
        - layout, component, utility で分類して"頭文字+-"でブロック指定
            - utility: ちょっとしたスタイルあて
- テーマを分割指定時の命名について
    - themeなどを変更する際に、wrapするBlockが変わると全体書き換えになるので、これを解消したい
    - "l l--{theme}[ l--{page|modify}]" にしてみる
        - ex: class="l l--base"
    - bodyにセットするとなおよし(となるとlではないかも)
    - l-pageはpageそのものが大きく他と違う場合に利用
        - 基本的には、第2階層または、それに準じる大きな枠でBlockが割り当てられるはず
- 細かいこと
    - bodyに割り当てるとしたら"l"でいいかな？
        - よい
    - class="l-nav__item active"のactiveってどう書く？
        - 選択肢としては以下のパターン
            - l-nav__item--active: BEM
            - l-button__item is-active: cssの判定用クラス
            - l-button__item js-active: jsが判定用に利用するクラス
            - WAI-AREA
        - 状況により使い分けをすれば良い
            - BEM形式はデザインをしているまさにその時は使いやすい
            - is-activeは、スクリプトと親和性がある
- 上記テーマ分割指定時のmixin,引数の書き方について
    - classにactiveをつけるサイト同じで、固めて置きたいものはmixinにしておけば良い
        - 全部mixinにしてしまうとパーツが増えすぎてわからなくなってしまう
- BEM+scssでどこまで頑張るか？ + utility系はどの程度許容？
    - パターン1: mixinだけで頑張る
    - パターン2: mixinはutilityに吸収する
    - extendとincludeの使い分け
    - なるべくBEMで頑張るべきだが、要件によりutilityも許容していく
- &での階層化について(たぶん好み)
    - 使わないほうが良い、理由は、技術的にそれで解決できないパターンが有るため
        - うまくcomponentやutilityを駆使して対応すればよいが、別のクラスをまたぐようなパターンで&が使えなくなってしまう
        - 確かにベタ書きで冗長だとは思う
- mrarginのとり方について
    - まずパターンとして、左、上に幅を取るパターンと、下、右に取るパターンがある
        - どちらかがよい
    - 入れ子の場合は？nth-last使う?
        - 使う。左、上の場合は:first-child



