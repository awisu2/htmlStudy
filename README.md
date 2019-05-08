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
    -　class="l-nav__item active"のactiveってどう書く？
    -　
- 上記テーマ分割指定時のmixin,引数の書き方について
- BEM+scssでどこまで頑張るか？ + utility系はどの程度許容？
    - パターン1: mixinだけで頑張る
    - パターン2: mixinはutilityに吸収する
    - extendとincludeの使い分け
- &での階層化について(たぶん好み)
- 前提として心得ておきたいこと
- mrarginのとり方について
    - 入れ子の場合は？nth-last使う?



