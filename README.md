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
        - layout, component, utility で分類して頭文字+-でブロック指定
            - utility: ちょっとしたスタイルあて
- テーマを分割指定時の命名について
    - themeなどを変更する際に、wrapするBlockが変わると全体書き換えになるので、これを解消したい
    - "l l--{theme}[ l--{page|modify}]" にしてみる
        - ex: class="l l--base"
    - bodyにセットするとなおよし
- 上記テーマ分割指定時のmixin,引数の書き方について    
- extendとincludeの使い分け
- layoutには "l-" をつける？
- &での階層化について
- 種類は？
- 前提として缶得ておきたいこと
- utility系は許容？
- mrarginのとり方について
    - 入れ子の場合は？



