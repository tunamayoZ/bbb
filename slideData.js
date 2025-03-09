const slideData = [
    {
        id: 'slide1',
        title: 'AI(Artificial Intelligence)',
        content: `
            <p>人工知能のこと。人間の知能や行動をコンピュータプログラムで再現する技術のことです。AIは、機械学習やディープラーニングなどの技術を用いて、データからパターンを学習し、問題を解決することができます。</p>
            <h3>ex. 自動運転車、生成AI、Youtubeのおすすめ機能</h3>
        `
    },
    {
        id: 'slide2',
        title: 'API(Application Programming Interface)',
        content: `
            <p>ソフトウェア同士が情報をやり取りするためのインターフェースのことです。APIは、プログラム間でデータを共有するための規約や手順を定義し、プログラムの連携を可能にします。</p>
            <h3>ex. Google Maps API、TensorFlow、Windows API</h3>
        `
    },
    {
        id: 'slide3',
        title: 'AR(Augmented Reality)',
        content: `
            <p>現実世界にデジタル情報を重ね合わせる技術のことです。ARは、スマートフォンやタブレット、ARグラスなどのデバイスを使用して、現実世界に仮想のオブジェクトや情報を表示することができます。</p>
            <h3>ex. ポケモンGO、Google Glass、IKEA Place</h3>
        `
    },
    {
        id: 'slide4',
        title: 'ASCII(American Standard Code for Information Interchange)',
        content: `
            <p>アメリカ合衆国で標準化された文字コードのことです。ASCIIは、文字や記号をコンピュータで扱うための規格であり、英数字や記号などをコンピュータで表現するために使用されます。</p>
            <h3>ex. テキストファイル、プログラムコード、通信プロトコル</h3>
        `
    },
    {
        id: 'slide5',
        title: 'ASP(Application Service Provider)',
        content: `
            <p>アプリケーションをインターネット経由で提供するサービスのことです。ASPは、ソフトウェアのライセンスやインストールを不要にし、クラウド上でアプリケーションを利用することができます。</p>
            <h3>ex. クラウドサービス、SaaS、Webアプリケーション</h3>
        `
    },

    {
        id: 'slide6',
        title: 'BCP(Business Continuity Plan)',
        content: `
            <p>企業が災害や事故などの緊急事態に直面した際に、事業を継続するための計画のことです。BCPは、リスク管理の一環として策定され、事業の中断を最小限に抑えることを目的としています。</p>
            <h3>ex. 災害対策計画、サイバー攻撃対応計画、事業継続計画</h3>
        `
    },
    {
        id: 'slide7',
        title: 'BEMS(Building Energy Management System)',
        content: `
            <p>建物のエネルギー消費を管理するシステムのことです。BEMSは、エネルギーの使用状況を監視し、効率的なエネルギー管理を実現するためのツールです。</p>
            <h3>ex. エネルギー管理システム、スマートビルディング、エネルギー効率化</h3>
        `
    },
    {
        id: 'slide8',
        title: 'BLE(Bluetooth Low Energy)',
        content: `
            <p>低消費電力で通信を行うBluetoothの規格のことです。BLEは、IoTデバイスやウェアラブルデバイスなど、バッテリー駆動のデバイスに広く使用されています。</p>
            <h3>ex. フィットネストラッカー、スマートウォッチ、スマートホームデバイス</h3>
        `
    },
    {
        id: 'slide9',
        title: 'BPO(Business Process Outsourcing)',
        content: `
            <p>企業の業務プロセスを外部の専門業者に委託することです。BPOは、コスト削減や業務効率化を目的として行われます。</p>
            <h3>ex. カスタマーサポート、データ入力、ITサポート</h3>
        `
    },
    {
        id: 'slide10',
        title: 'BPR(Business Process Reengineering)',
        content: `
            <p>企業の業務プロセスを根本的に見直し、再設計することです。BPRは、業務の効率化や競争力の向上を目的として行われます。</p>
            <h3>ex. 業務プロセス見直し、物流効率化、サプライチェーン効率化</h3>
        `
    },
    {
        id: 'slide11',
        title: 'BSC(Balanced Scorecard)',
        content: `
            <p>企業の戦略を実行するための経営管理ツールのことです。BSCは、財務面だけでなく、顧客、プロセス、学習・成長の観点から企業のパフォーマンスを評価します。</p>
            <h3>ex. 戦略管理、パフォーマンス評価、目標設定</h3>
        `
    },
    {
        id: 'slide12',
        title: 'BYOD(Bring Your Own Device)',
        content: `
            <p>従業員が個人所有のデバイスを業務に使用することです。BYODは、柔軟な働き方を実現するための取り組みの一つです。</p>
            <h3>ex. リモートワーク、テレワーク、デバイス購入コスト削減</h3>
        `
    },
    {
        id: 'slide13',
        title: 'CAD(Computer-Aided Design)',
        content: `
            <p>コンピュータを使用して設計を行う技術のことです。CADは、建築、機械、電子などの分野で広く使用されています。</p>
            <h3>ex. 建築設計、機械設計、電子回路設計</h3>
        `
    },
    {
        id: 'slide14',
        title: 'CAM(Computer-Aided Manufacturing)',
        content: `
            <p>コンピュータを使用して製造を行う技術のことです。CAMは、製造プロセスの自動化や効率化を実現します。</p>
            <h3>ex. 自動車製造、電子機器製造、精密機器製造</h3>
        `
    },
    {
        id: 'slide15',
        title: 'CAE(Computer-Aided Engineering)',
        content: `
            <p>コンピュータを使用して工学解析を行う技術のことです。CAEは、製品設計や開発の効率化を支援します。</p>
            <h3>ex. 構造解析、流体解析、モデリング</h3>
        `
    },
    {
        id: 'slide16',
        title: 'CDP(Customer Data Platform)',
        content: `
            <p>顧客データを統合・管理するためのプラットフォームのことです。CDPは、マーケティングや顧客対応の効率化を支援します。</p>
            <h3>ex. データ統合、マーケティングキャンペーン、顧客行動分析</h3>
        `
    },
    {
        id: 'slide17',
        title: 'CEO(Chief Executive Officer)',
        content: `
            <p>企業の最高経営責任者のことです。CEOは、企業の経営戦略を策定し、実行する責任を負います。</p>
            <h3>ex. 経営戦略策定、意思決定、リーダーシップ</h3>
        `
    },
    {
        id: 'slide18',
        title: 'CFO(Chief Financial Officer)',
        content: `
            <p>企業の最高財務責任者のことです。CFOは、企業の財務戦略を策定し、実行する責任を負います。</p>
            <h3>ex. 資金調達、投資戦略、財務リスク管理</h3>
        `
    },
    {
        id: 'slide19',
        title: 'CFT(Cross-Functional Team)',
        content: `
            <p>異なる部門のメンバーで構成されるチームのことです。CFTは、複雑なプロジェクトや課題に対して、部門横断的な視点で取り組むことができます。</p>
            <h3>ex. 新製品開発、プロセス改善、プロジェクト管理</h3>
        `
    },
    {
        id: 'slide20',
        title: 'CIO(Chief Information Officer)',
        content: `
            <p>企業の最高情報責任者のことです。CIOは、企業の情報戦略を策定し、実行する責任を負います。</p>
            <h3>ex. IT戦略策定、デジタル化推進、ITインフラ管理</h3>
        `
    },
    {
        id: 'slide21',
        title: 'CRM(Customer Relationship Management)',
        content: `
            <p>顧客関係管理のことです。CRMは、顧客との関係を構築・維持し、顧客満足度を向上させるための戦略やツールを指します。</p>
            <h3>ex. 顧客データ管理、カスタマーサポート、マーケティング</h3>
        `
    },
    {
        id: 'slide22',
        title: 'CSF(Critical Success Factor)',
        content: `
            <p>企業が成功するために重要な要因のことです。CSFは、企業の戦略目標を達成するために必要な要素を特定し、管理するためのフレームワークです。</p>
            <h3>ex. プロジェクト管理、戦略立案、パフォーマンス評価</h3>
        `
    },
    {
        id: 'slide23',
        title: 'CSS(Cascading Style Sheets)',
        content: `
            <p>ウェブページのスタイルやレイアウトを指定するための言語のことです。CSSは、HTMLと組み合わせてウェブページのデザインを定義します。</p>
            <h3>ex. レイアウト設定、スタイル指定、デザイン調整</h3>
        `
    },
    {
        id: 'slide24',
        title: 'CTI(Computer Telephony Integration)',
        content: `
                <p>コンピュータと電話システムを統合する技術のことです。CTIは、電話応対業務の効率化や顧客サービスの向上を目的としています。</p>
                <h3>ex. コールセンター、顧客サービス、データ連携</h3>
            `
    },
    {
        id: 'slide25',
        title: 'CTO(Chief Technology Officer)',
        content: `
                <p>企業の最高技術責任者のことです。CTOは、企業の技術戦略を策定し、技術開発を指導する責任を負います。</p>
                <h3>ex. 技術戦略策定、技術開発指導、新技術導入</h3>
            `
    },
    {
        id: 'slide26',
        title: 'CSV(Comma-Separated Values)',
        content: `
                <p>データをカンマで区切って表現するファイル形式のことです。CSVは、データの交換や保存に広く使用されています。</p>
                <h3>ex. データ交換、データ保存、データ分析</h3>
            `
    },
    {
        id: 'slide27',
        title: 'CPU(Central Processing Unit)',
        content: `
                <p>コンピュータの中央処理装置のことです。CPUは、コンピュータの演算や制御を行う主要なハードウェアです。</p>
                <h3>ex. 演算処理、制御機能、多用途</h3>
            `
    },
    {
        id: 'slide28',
        title: 'CUI(Character User Interface)',
        content: `
                <p>文字ベースのユーザーインターフェースのことです。CUIは、コマンドラインインターフェースとも呼ばれ、キーボード入力によって操作されます。</p>
                <h3>ex. システム管理、プログラミング、効率的操作</h3>
            `
    },
    {
        id: 'slide29',
        title: 'CSR(Corporate Social Responsibility)',
        content: `
                <p>企業の社会的責任のことです。CSRは、企業が社会や環境に対して責任を持ち、持続可能な発展を目指す取り組みを指します。</p>
                <h3>ex. 社会貢献活動、環境保護活動、持続可能な発展</h3>
            `
    },
    {
        id: 'slide30',
        title: 'DFD(Data Flow Diagram)',
        content: `
                <p>データの流れを視覚的に表現する図のことです。DFDは、システムのデータ処理や情報の流れを理解するために使用されます。</p>
                <h3>ex. システム設計、データ分析、プロセス改善</h3>
            `
    },
    {
        id: 'slide31',
        title: 'DHCPサーバ(Dynamic Host Configuration Protocol Server)',
        content: `
                <p>ネットワーク上のデバイスに自動的にIPアドレスを割り当てるサーバのことです。DHCPサーバは、ネットワーク管理を簡素化します。</p>
                <h3>ex. IPアドレス割り当て、ネットワーク管理、効率的運用</h3>
            `
    },
    {
        id: 'slide32',
        title: 'DMZ(Demilitarized Zone)',
        content: `
                <p>内部ネットワークと外部ネットワークの間に設置される中間ネットワークのことです。DMZは、セキュリティを強化し、外部からの攻撃を防ぐために使用されます。</p>
                <h3>ex. Webサーバ保護、メールサーバ保護、セキュリティ強化</h3>
            `
    },
    {
        id: 'slide33',
        title: 'DNSサーバ(Domain Name System Server)',
        content: `
                <p>ドメイン名とIPアドレスを対応付けるサーバのことです。DNSサーバは、インターネット上での名前解決を行います。</p>
                <h3>ex. 名前解決、インターネット接続、分散管理</h3>
            `
    },
    {
        id: 'slide34',
        title: 'DoS(Denial of Service)',
        content: `
                <p>DoS（Denial of Service）とは、サービス拒否攻撃のことです。DoS攻撃は、ターゲットのサーバやネットワークに過剰な負荷をかけて、正常なサービス提供を妨害する攻撃手法です。</p>
                <h3>ex. 過負荷、サービス停止、多様な手法</h3>
            `
    },
    {
        id: 'slide35',
        title: 'DPI(Deep Packet Inspection)',
        content: `
                <p>DPI（Deep Packet Inspection）とは、ネットワーク上のデータパケットを詳細に解析する技術のことです。DPIは、ネットワークのセキュリティやトラフィック管理に使用されます。</p>
                <h3>ex. 詳細解析、セキュリティ強化、トラフィック管理</h3>
            `
    },
    {
        id: 'slide36',
        title: 'DRAM(Dynamic Random Access Memory)',
        content: `
                <p>DRAM（Dynamic Random Access Memory）とは、コンピュータの主記憶装置として広く使用されるメモリの一種です。DRAMは、データを一時的に保存し、高速な読み書きが可能です。</p>
                <h3>ex. 高速、揮発性、広範な使用</h3>
            `
    },
    {
        id: 'slide37',
        title: 'DX(Digital Transformation)',
        content: `
                <p>DX（Digital Transformation）とは、デジタル技術を活用してビジネスや社会の変革を推進することです。DXは、業務効率化や新たな価値創造を目指します。</p>
                <h3>ex. 技術活用、業務効率化、価値創造</h3>
            `
    },
    {
        id: 'slide38',
        title: 'EDI(Electronic Data Interchange)',
        content: `
                <p>EDI（Electronic Data Interchange）とは、企業間で電子的にデータを交換する仕組みのことです。EDIは、取引の効率化やコスト削減を実現します。</p>
                <h3>ex. 電子取引、効率化、コスト削減</h3>
            `
    },
    {
        id: 'slide39',
        title: 'E-R図(Entity-Relationship Diagram)',
        content: `
                <p>E-R図（Entity-Relationship Diagram）とは、データベースの設計を視覚的に表現する図のことです。E-R図は、データの構造や関係を理解するために使用されます。</p>
                <h3>ex. 視覚化、関係表現、設計支援</h3>
            `
    },
    {
        id: 'slide40',
        title: 'eKYC(Electronic Know Your Customer)',
        content: `
                <p>eKYC（Electronic Know Your Customer）とは、電子的に顧客の本人確認を行う仕組みのことです。eKYCは、金融機関やオンラインサービスで広く使用されています。</p>
                <h3>ex. 電子本人確認、効率化、セキュリティ</h3>
            `
    },
    {
        id: 'slide41',
        title: 'ERP(Enterprise Resource Planning)',
        content: `
                <p>ERP（Enterprise Resource Planning）とは、企業の資源を統合的に管理するシステムのことです。ERPは、業務の効率化や情報の一元管理を実現します。</p>
                <h3>ex. 統合管理、効率化、情報一元化</h3>
            `
    },
    {
        id: 'slide42',
        title: 'ESG投資(Environmental, Social, and Governance Investment)',
        content: `
                <p>ESG投資（Environmental, Social, and Governance Investment）とは、環境、社会、ガバナンスの要素を考慮して行う投資のことです。ESG投資は、持続可能な社会の実現を目指します。</p>
                <h3>ex. 環境配慮、社会貢献、ガバナンス</h3>
            `
    },
    {
        id: 'slide43',
        title: 'FAQ(Frequently Asked Questions)',
        content: `
                <p>FAQ（Frequently Asked Questions）とは、よくある質問とその回答をまとめたものです。FAQは、ユーザーの疑問を解消し、サポート業務の効率化を図ります。</p>
                <h3>ex. 疑問解消、効率化、アクセス容易</h3>
            `
    },

    {
        id: 'slide44',
        title: 'FTTH(Fiber To The Home)',
        content: `
                <p>FTTH（Fiber To The Home）とは、光ファイバーを家庭まで引き込むインターネット接続方式のことです。FTTHは、高速で安定したインターネット接続を提供します。</p>
                <h3>ex. 高速接続、安定性、広帯域</h3>
            `
    },
    {
        id: 'slide45',
        title: 'GPS(Global Positioning System)',
        content: `
                <p>GPS（Global Positioning System）とは、人工衛星を利用して地球上の位置を測定するシステムのことです。GPSは、ナビゲーションや位置情報サービスに広く使用されています。</p>
                <h3>ex. 高精度、グローバル、多様な応用</h3>
            `
    },
    {
        id: 'slide46',
        title: 'GUI(Graphical User Interface)',
        content: `
                <p>GUI（Graphical User Interface）とは、グラフィカルな要素を用いてユーザーとコンピュータが対話するインターフェースのことです。GUIは、視覚的に直感的な操作を可能にします。</p>
                <h3>ex. 視覚的、直感的操作、ユーザーフレンドリー</h3>
            `
    },
    {
        id: 'slide47',
        title: 'GPU(Graphics Processing Unit)',
        content: `
                <p>GPU（Graphics Processing Unit）とは、画像処理を専門に行うプロセッサのことです。GPUは、グラフィックスのレンダリングや並列計算に優れています。</p>
                <h3>ex. 高速処理、並列計算、多用途</h3>
            `
    },
    {
        id: 'slide48',
        title: 'HCD(Human-Centered Design)',
        content: `
                <p>HCD（Human-Centered Design）とは、人間中心設計のことです。HCDは、ユーザーのニーズや行動を理解し、それに基づいて製品やサービスを設計するアプローチです。</p>
                <h3>ex. ユーザー中心、インタラクション、反復設計</h3>
            `
    },
    {
        id: 'slide49',
        title: 'HDMI(High-Definition Multimedia Interface)',
        content: `
                <p>HDMI（High-Definition Multimedia Interface）とは、高解像度の映像と音声をデジタルで伝送するインターフェースのことです。HDMIは、テレビ、モニター、プロジェクターなどで広く使用されています。</p>
                <h3>ex. 高解像度、デジタル音声、多用途</h3>
            `
    },
    {
        id: 'slide50',
        title: 'HEMS(Home Energy Management System)',
        content: `
                <p>HEMS（Home Energy Management System）とは、家庭のエネルギー消費を管理するシステムのことです。HEMSは、エネルギーの使用状況を監視し、効率的なエネルギー管理を実現します。</p>
                <h3>ex. エネルギー監視、効率化、コスト削減</h3>
            `
    },
    {
        id: 'slide51',
        title: 'HRT(Human Resource Technology)',
        content: `
                <p>HRT（Human Resource Technology）とは、人事管理における技術のことです。HRTは、採用、評価、教育などの人事業務を効率化します。</p>
                <h3>ex. 効率化、データ活用、柔軟性</h3>
            `
    },
    {
        id: 'slide52',
        title: 'HRM(Human Resource Management)',
        content: `
                <p>HRM（Human Resource Management）とは、人材管理のことです。HRMは、従業員の採用、評価、教育、報酬などを管理します。</p>
                <h3>ex. 採用管理、評価管理、教育管理</h3>
            `
    },
    {
        id: 'slide53',
        title: 'HTML(HyperText Markup Language)',
        content: `
                <p>HTML（HyperText Markup Language）とは、ウェブページを作成するためのマークアップ言語のことです。HTMLは、ウェブページの構造を定義し、ブラウザで表示される内容を記述します。</p>
                <h3>ex. 構造定義、タグ、互換性</h3>
            `
    },
    {
        id: 'slide54',
        title: 'HTTP(HyperText Transfer Protocol)',
        content: `
                <p>HTTP（HyperText Transfer Protocol）とは、ウェブブラウザとウェブサーバ間でデータを送受信するためのプロトコルのことです。HTTPは、ウェブページの表示やデータの送受信に使用されます。</p>
                <h3>ex. データ送受信、ステートレス、広範な使用</h3>
            `
    },
    {
        id: 'slide55',
        title: 'ICT(Information and Communication Technology)',
        content: `
                <p>ICT（Information and Communication Technology）とは、情報通信技術のことです。ICTは、情報の収集、処理、伝達を行う技術を指し、さまざまな分野で応用されています。</p>
                <h3>ex. 情報収集、情報処理、情報伝達</h3>
            `
    },
    {
        id: 'slide56',
        title: 'IEC(International Electrotechnical Commission)',
        content: `
                <p>IEC（International Electrotechnical Commission）とは、国際電気標準会議のことです。IECは、電気技術に関する国際標準を策定する機関です。</p>
                <h3>ex. 国際標準、広範な分野、国際協力</h3>
            `
    },
    {
        id: 'slide57',
        title: 'IEEE(Institute of Electrical and Electronics Engineers)',
        content: `
                <p>IEEE（Institute of Electrical and Electronics Engineers）とは、電気電子技術者協会のことです。IEEEは、電気電子技術に関する標準の策定や技術の普及を行う団体です。</p>
                <h3>ex. 技術標準、技術普及、専門家ネットワーク</h3>
            `
    },
    {
        id: 'slide58',
        title: 'IDS(Intrusion Detection System)',
        content: `
                <p>IDS（Intrusion Detection System）とは、ネットワークやシステムへの不正侵入を検知するシステムのことです。IDSは、セキュリティインシデントの早期発見と対応を支援します。</p>
                <h3>ex. 不正検知、リアルタイム監視、アラート</h3>
            `
    },
    {
        id: 'slide59',
        title: 'IMAP(Internet Message Access Protocol)',
        content: `
                <p>IMAP（Internet Message Access Protocol）とは、電子メールをサーバ上で管理し、クライアントからアクセスするためのプロトコルのことです。IMAPは、複数のデバイスからメールを管理するのに適しています。</p>
                <h3>ex. サーバ管理、複数デバイス、同期</h3>
            `
    },
    {
        id: 'slide60',
        title: 'IoT(Internet of Things)',
        content: `
                <p>IoT（Internet of Things）とは、インターネットに接続された物理的なデバイスやセンサーが相互に通信し、データを交換する仕組みのことです。IoTは、スマートホーム、産業オートメーション、ヘルスケアなどで広く応用されています。</p>
                <h3>ex. 相互通信、データ交換、多様な応用</h3>
            `
    },
    {
        id: 'slide61',
        title: 'IPO(Initial Public Offering)',
        content: `
                <p>IPO（Initial Public Offering）とは、企業が初めて株式を公開し、一般投資家に販売することです。IPOは、企業が資金を調達し、成長を加速させるための手段です。</p>
                <h3>ex. 資金調達、成長加速、市場公開</h3>
            `
    },
    {
        id: 'slide62',
        title: 'IPアドレス',
        content: `
                <p>IPアドレスとは、インターネット上でデバイスを識別するための一意の番号のことです。IPアドレスは、ネットワーク通信において重要な役割を果たします。</p>
                <h3>ex. 一意性、識別、通信</h3>
            `
    },
    {
        id: 'slide63',
        title: 'IrDA',
        content: `
                <p>IrDA（Infrared Data Association）とは、赤外線を使用してデータを通信するための規格のことです。IrDAは、短距離でのデータ通信に使用されます。</p>
                <h3>ex. 短距離通信、赤外線、データ通信</h3>
            `
    },
    {
        id: 'slide64',
        title: 'ISMS',
        content: `
                <p>ISMS（Information Security Management System）とは、情報セキュリティを管理するためのシステムのことです。ISMSは、情報の機密性、完全性、可用性を確保するための枠組みを提供します。</p>
                <h3>ex. 機密性、完全性、可用性</h3>
            `
    },
    {
        id: 'slide65',
        title: 'ISO',
        content: `
                <p>ISO（International Organization for Standardization）とは、国際標準化機構のことです。ISOは、さまざまな分野で国際標準を策定し、普及を図ります。</p>
                <h3>ex. 国際標準、広範な分野、普及</h3>
            `
    },
    {
        id: 'slide66',
        title: 'ISP',
        content: `
                <p>ISP（Internet Service Provider）とは、インターネット接続サービスを提供する事業者のことです。ISPは、個人や企業にインターネット接続を提供します。</p>
                <h3>ex. 接続サービス、多様なプラン、サポート</h3>
            `
    },
    {
        id: 'slide67',
        title: 'IVR',
        content: `
                <p>IVR（Interactive Voice Response）とは、音声応答システムのことです。IVRは、電話を通じて自動的に音声案内を行い、ユーザーの入力に応じて対応します。</p>
                <h3>ex. 自動応答、ユーザー入力、効率化</h3>
            `
    },
    {
        id: 'slide68',
        title: 'JANコード',
        content: `
                <p>JANコード（Japanese Article Number）とは、日本で使用される商品識別コードのことです。JANコードは、商品管理や流通において重要な役割を果たします。</p>
                <h3>ex. 識別コード、商品管理、流通</h3>
            `
    },
    {
        id: 'slide69',
        title: 'JIS',
        content: `
                <p>JIS（Japanese Industrial Standards）とは、日本の工業標準規格のことです。JISは、製品やサービスの品質を確保するための基準を提供します。</p>
                <h3>ex. 工業標準、品質確保、基準提供</h3>
            `
    },
    {
        id: 'slide70',
        title: 'JIT',
        content: `
                <p>JIT（Just In Time）とは、必要なものを必要なときに必要な量だけ生産する生産方式のことです。JITは、在庫削減や生産効率の向上を目指します。</p>
                <h3>ex. 在庫削減、効率向上、タイムリー</h3>
            `
    },
    {
        id: 'slide71',
        title: 'KGI',
        content: `
                <p>KGI（Key Goal Indicator）とは、重要目標達成指標のことです。KGIは、企業の目標達成度を測定するための指標です。</p>
                <h3>ex. 目標達成、指標、企業目標</h3>
            `
    },
    {
        id: 'slide72',
        title: 'KPI',
        content: `
                <p>KPI（Key Performance Indicator）とは、重要業績評価指標のことです。KPIは、企業の業績を評価するための指標です。</p>
                <h3>ex. 業績評価、指標、パフォーマンス</h3>
            `
    },
    {
        id: 'slide73',
        title: 'LAN',
        content: `
                <p>LAN（Local Area Network）とは、限定された範囲内で構築されるネットワークのことです。LANは、企業や家庭内でのデバイス間の通信に使用されます。</p>
                <h3>ex. 限定範囲、デバイス間通信、高速通信</h3>
            `
    },
    {
        id: 'slide74',
        title: 'LED(Light Emitting Diode)',
        content: `
                <p>LED（Light Emitting Diode）とは、光を発する半導体素子のことです。LEDは、照明やディスプレイなどに広く使用されています。</p>
                <h3>ex. 省エネ、長寿命、多用途</h3>
            `
    },
    {
        id: 'slide75',
        title: 'LPWA(Low Power Wide Area)',
        content: `
                <p>LPWA（Low Power Wide Area）とは、低消費電力で広範囲の通信を行う技術のことです。LPWAは、IoTデバイスの通信に適しています。</p>
                <h3>ex. 低消費電力、広範囲通信、IoT適用</h3>
            `
    },
    {
        id: 'slide76',
        title: 'MACアドレス',
        content: `
                <p>MACアドレスとは、ネットワークインターフェースカードに割り当てられる一意の識別子のことです。MACアドレスは、デバイス間の通信に使用されます。</p>
                <h3>ex. 一意性、識別、通信</h3>
            `
    },
    {
        id: 'slide77',
        title: 'M&A(Mergers and Acquisitions)',
        content: `
                <p>M&A（Mergers and Acquisitions）とは、企業の合併や買収のことです。M&Aは、企業の成長や市場拡大を目的として行われます。</p>
                <h3>ex. 合併、買収、成長</h3>
            `
    },
    {
        id: 'slide78',
        title: 'MBO(Management Buyout)',
        content: `
                <p>MBO（Management Buyout）とは、経営陣が自社の株式を買い取ることです。MBOは、経営の独立性を確保するために行われます。</p>
                <h3>ex. 経営陣買収、独立性、経営権</h3>
            `
    },
    {
        id: 'slide79',
        title: 'MDM(Mobile Device Management)',
        content: `
                <p>MDM（Mobile Device Management）とは、モバイルデバイスを管理するためのシステムのことです。MDMは、デバイスのセキュリティや設定を一元管理します。</p>
                <h3>ex. セキュリティ、設定管理、リモート管理</h3>
            `
    },
    {
        id: 'slide80',
        title: 'MIME(Multipurpose Internet Mail Extensions)',
        content: `
                <p>MIME（Multipurpose Internet Mail Extensions）とは、電子メールでさまざまな形式のデータを送受信するための規格のことです。MIMEは、テキスト、画像、音声などのデータを扱います。</p>
                <h3>ex. 多用途、電子メール、データ送受信</h3>
            `
    },
    {
        id: 'slide81',
        title: 'MR(Mixed Reality)',
        content: `
                <p>MR（Mixed Reality）とは、現実世界と仮想世界を融合させる技術のことです。MRは、教育、エンターテインメント、医療などで応用されています。</p>
                <h3>ex. 現実と仮想の融合、インタラクティブ、多様な応用</h3>
            `
    },
    {
        id: 'slide82',
        title: 'MVNO(Mobile Virtual Network Operator)',
        content: `
                <p>MVNO（Mobile Virtual Network Operator）とは、他社の通信インフラを借りて移動体通信サービスを提供する事業者のことです。MVNOは、独自のサービスや料金プランを提供します。</p>
                <h3>ex. インフラ借用、独自サービス、競争促進</h3>
            `
    },
    {
        id: 'slide83',
        title: 'NAT(Network Address Translation)',
        content: `
                <p>NAT（Network Address Translation）とは、ネットワークアドレス変換のことです。NATは、プライベートIPアドレスをパブリックIPアドレスに変換し、インターネット接続を可能にします。</p>
                <h3>ex. アドレス変換、セキュリティ向上、アドレス節約</h3>
            `
    },
    {
        id: 'slide84',
        title: 'NAS(Network Attached Storage)',
        content: `
                <p>NAS（Network Attached Storage）とは、ネットワークに接続されたストレージデバイスのことです。NASは、複数のデバイスからデータを共有・管理するために使用されます。</p>
                <h3>ex. データ共有、管理容易、拡張性</h3>
            `
    },
    {
        id: 'slide85',
        title: 'NDS(Network Directory Service)',
        content: `
                <p>NDS（Network Directory Service）とは、ネットワーク上のリソースを管理するためのディレクトリサービスのことです。NDSは、ユーザー認証やリソース管理を行います。</p>
                <h3>ex. ユーザー認証、リソース管理、集中管理</h3>
            `
    },
    {
        id: 'slide86',
        title: 'NFC(Near Field Communication)',
        content: `
                <p>NFC（Near Field Communication）とは、近距離無線通信技術のことです。NFCは、スマートフォンやICカードなどで使用され、データのやり取りや決済に利用されます。</p>
                <h3>ex. 近距離通信、高速通信、多用途</h3>
            `
    },
    {
        id: 'slide87',
        title: 'OJT(On-the-Job Training)',
        content: `
                <p>OJT（On-the-Job Training）とは、職場で実際の業務を通じて行う訓練のことです。OJTは、実務経験を積みながらスキルを習得する方法です。</p>
                <h3>ex. 実務経験、即戦力、現場指導</h3>
            `
    },
    {
        id: 'slide88',
        title: 'OEM(Original Equipment Manufacturer)',
        content: `
                <p>OEM（Original Equipment Manufacturer）とは、他社ブランドの製品を製造することです。OEMは、製造業者が他社のブランド名で製品を提供します。</p>
                <h3>ex. ブランド提供、製造委託、コスト削減</h3>
            `
    },
    {
        id: 'slide89',
        title: 'Off-JT(Off-the-Job Training)',
        content: `
                <p>Off-JT（Off-the-Job Training）とは、職場外で行う訓練のことです。Off-JTは、セミナーや研修などを通じてスキルを習得する方法です。</p>
                <h3>ex. 職場外訓練、専門知識、計画的</h3>
            `
    },
    {
        id: 'slide90',
        title: 'OS(Operating System)',
        content: `
                <p>OS（Operating System）とは、コンピュータの基本ソフトウェアのことです。OSは、ハードウェアとソフトウェアの間で動作を管理し、ユーザーがコンピュータを操作するための環境を提供します。</p>
                <h3>ex. 基本ソフトウェア、リソース管理、ユーザーインターフェース</h3>
            `
    },
    {
        id: 'slide91',
        title: 'OSS(Open Source Software)',
        content: `
                <p>OSS（Open Source Software）とは、ソースコードが公開されているソフトウェアのことです。OSSは、誰でも自由に使用、改良、再配布することができます。</p>
                <h3>ex. ソースコード公開、自由利用、コミュニティ</h3>
            `
    },
    {
        id: 'slide92',
        title: 'PDF(Portable Document Format)',
        content: `
                <p>PDF（Portable Document Format）とは、電子文書の形式の一つです。PDFは、異なる環境でも同じレイアウトで表示できる特徴があります。</p>
                <h3>ex. 互換性、固定レイアウト、多用途</h3>
            `
    },
    {
        id: 'slide93',
        title: 'PEST分析',
        content: `
                <p>PEST分析とは、政治（Political）、経済（Economic）、社会（Social）、技術（Technological）の観点から外部環境を分析する手法のことです。PEST分析は、企業の戦略立案に役立ちます。</p>
                <h3>ex. 外部環境分析、戦略立案、多角的視点</h3>
            `
    },

    {
        id: 'slide94',
        title: 'PL法',
        content: `
                <p>PL法（Product Liability Law）とは、製造物責任法のことです。PL法は、製品の欠陥によって生じた損害について、製造者が責任を負うことを定めています。</p>
                <h3>ex. 製造物責任、消費者保護、損害賠償</h3>
            `
    },
    {
        id: 'slide95',
        title: 'PMBOK',
        content: `
                <p>PMBOK（Project Management Body of Knowledge）とは、プロジェクトマネジメントの知識体系のことです。PMBOKは、プロジェクトマネジメントのベストプラクティスをまとめたガイドです。</p>
                <h3>ex. 知識体系、ベストプラクティス、ガイド</h3>
            `
    },
    {
        id: 'slide96',
        title: 'PoC',
        content: `
                <p>PoC（Proof of Concept）とは、概念実証のことです。PoCは、新しいアイデアや技術の実現可能性を検証するためのプロセスです。</p>
                <h3>ex. 実現可能性、リスク低減、早期評価</h3>
            `
    },
    {
        id: 'slide97',
        title: 'POP',
        content: `
                <p>POP（Point of Purchase）とは、購買時点のことです。POPは、消費者が商品を購入する際の販売促進活動を指します。</p>
                <h3>ex. 購買時点、販売促進、消費者誘導</h3>
            `
    },
    {
        id: 'slide98',
        title: 'PPM',
        content: `
                <p>PPM（Project Portfolio Management）とは、プロジェクトポートフォリオマネジメントのことです。PPMは、複数のプロジェクトを統合的に管理し、最適な資源配分を行います。</p>
                <h3>ex. 統合管理、資源配分、戦略的整合</h3>
            `
    },
    {
        id: 'slide99',
        title: 'QCD',
        content: `
                <p>QCD（Quality, Cost, Delivery）とは、品質、コスト、納期のことです。QCDは、製造業における重要な管理指標です。</p>
                <h3>ex. 品質、コスト、納期</h3>
            `
    },
    {
        id: 'slide100',
        title: 'QRコード',
        content: `
                <p>QRコードとは、二次元バーコードの一種で、情報を格納するためのコードのことです。QRコードは、スマートフォンなどで読み取ることができます。</p>
                <h3>ex. 高密度、高速読み取り、多用途</h3>
            `
    },

    {
        id: 'slide101',
        title: 'RAM',
        content: `
                    <p>RAM（Random Access Memory）とは、コンピュータの主記憶装置の一種で、データを一時的に保存するためのメモリのことです。RAMは、高速な読み書きが可能です。</p>
                    <h3>ex. 高速、揮発性、一時保存</h3>
                `
    },
    {
        id: 'slide102',
        title: 'RDBMS',
        content: `
                    <p>RDBMS（Relational Database Management System）とは、リレーショナルデータベース管理システムのことです。RDBMSは、データを表形式で管理し、SQLを使用して操作します。</p>
                    <h3>ex. 表形式、SQL使用、データ整合性</h3>
                `
    },
    {
        id: 'slide103',
        title: 'RFP',
        content: `
                    <p>RFP（Request for Proposal）とは、提案依頼書のことです。RFPは、企業がプロジェクトやサービスの提供を依頼する際に、提案を求める文書です。</p>
                    <h3>ex. 提案依頼、プロジェクト、サービス提供</h3>
                `
    },
    {
        id: 'slide104',
        title: 'RFID',
        content: `
                    <p>RFID（Radio Frequency Identification）とは、無線周波数を使用して情報を読み取る技術のことです。RFIDは、物流や在庫管理などで広く使用されています。</p>
                    <h3>ex. 無線通信、非接触、多用途</h3>
                `
    },
    {
        id: 'slide105',
        title: 'ROI',
        content: `
                    <p>ROI（Return on Investment）とは、投資利益率のことです。ROIは、投資に対する利益の割合を示す指標です。</p>
                    <h3>ex. 投資利益率、指標、利益</h3>
                `
    },
    {
        id: 'slide106',
        title: 'ROM',
        content: `
                    <p>ROM（Read-Only Memory）とは、読み取り専用メモリのことです。ROMは、データの書き換えができず、主にファームウェアの保存に使用されます。</p>
                    <h3>ex. 読み取り専用、ファームウェア、データ保存</h3>
                `
    },
    {
        id: 'slide107',
        title: 'RPA',
        content: `
                    <p>RPA（Robotic Process Automation）とは、業務プロセスを自動化する技術のことです。RPAは、定型的な業務を自動化し、効率化を図ります。</p>
                    <h3>ex. 業務自動化、効率化、定型業務</h3>
                `
    },
    {
        id: 'slide108',
        title: 'SaaS',
        content: `
                    <p>SaaS（Software as a Service）とは、ソフトウェアをインターネット経由で提供するサービスのことです。SaaSは、クラウド上でソフトウェアを利用する形態です。</p>
                    <h3>ex. クラウドサービス、ソフトウェア提供、インターネット</h3>
                `
    },
    {
        id: 'slide109',
        title: 'SCM',
        content: `
                    <p>SCM（Supply Chain Management）とは、供給連鎖管理のことです。SCMは、製品の生産から販売までのプロセスを統合的に管理します。</p>
                    <h3>ex. 供給連鎖、統合管理、プロセス</h3>
                `
    },
    {
        id: 'slide110',
        title: 'SEO',
        content: `
                    <p>SEO（Search Engine Optimization）とは、検索エンジン最適化のことです。SEOは、ウェブサイトの検索エンジンでの順位を向上させるための手法です。</p>
                    <h3>ex. 検索エンジン、最適化、順位向上</h3>
                `
    },
    {
        id: 'slide111',
        title: 'SFA',
        content: `
                    <p>SFA（Sales Force Automation）とは、営業支援システムのことです。SFAは、営業活動を効率化し、営業プロセスを管理します。</p>
                    <h3>ex. 営業支援、効率化、プロセス管理</h3>
                `
    },
    {
        id: 'slide112',
        title: 'SIM',
        content: `
                    <p>SIM（Subscriber Identity Module）とは、携帯電話の加入者識別カードのことです。SIMは、携帯電話の契約情報を保存します。</p>
                    <h3>ex. 加入者識別、契約情報、携帯電話</h3>
                `
    },
    {
        id: 'slide113',
        title: 'SMTP',
        content: `
                    <p>SMTP（Simple Mail Transfer Protocol）とは、電子メールを送信するためのプロトコルのことです。SMTPは、メールサーバ間でメールを転送します。</p>
                    <h3>ex. メール送信、プロトコル、メールサーバ</h3>
                `
    },
    {
        id: 'slide114',
        title: 'SQL',
        content: `
                    <p>SQL（Structured Query Language）とは、データベースを操作するための言語のことです。SQLは、データの検索、挿入、更新、削除を行います。</p>
                    <h3>ex. データベース操作、検索、挿入、更新、削除</h3>
                `
    },
    {
        id: 'slide115',
        title: 'UI',
        content: `
                    <p>UI（User Interface）とは、ユーザーインターフェースのことです。UIは、ユーザーとシステムが対話するための手段です。</p>
                    <h3>ex. ユーザーインターフェース、対話、手段</h3>
                `
    },
    {
        id: 'slide116',
        title: 'UML',
        content: `
                    <p>UML（Unified Modeling Language）とは、統一モデリング言語のことです。UMLは、システムの設計や仕様を視覚的に表現するための言語です。</p>
                    <h3>ex. モデリング、設計、視覚化</h3>
                `
    },
    {
        id: 'slide117',
        title: 'UPS',
        content: `
                    <p>UPS（Uninterruptible Power Supply）とは、無停電電源装置のことです。UPSは、電力供給が途絶えた際に一時的に電力を供給します。</p>
                    <h3>ex. 無停電電源、電力供給、バックアップ</h3>
                `
    },
    {
        id: 'slide118',
        title: 'URL',
        content: `
                    <p>URL（Uniform Resource Locator）とは、インターネット上のリソースの位置を示すアドレスのことです。URLは、ウェブページやファイルの場所を指定します。</p>
                    <h3>ex. リソース位置、アドレス、ウェブページ</h3>
                `
    },
    {
        id: 'slide119',
        title: 'USB',
        content: `
                    <p>USB（Universal Serial Bus）とは、汎用シリアルバスのことです。USBは、コンピュータと周辺機器を接続するための規格です。</p>
                    <h3>ex. 接続規格、周辺機器、汎用</h3>
                `
    },
    {
        id: 'slide120',
        title: 'UX',
        content: `
                    <p>UX（User Experience）とは、ユーザーエクスペリエンスのことです。UXは、ユーザーが製品やサービスを使用する際の体験を指します。</p>
                    <h3>ex. ユーザー体験、製品、サービス</h3>
                `
    },
    {
        id: 'slide121',
        title: 'VDI',
        content: `
                    <p>VDI（Virtual Desktop Infrastructure）とは、仮想デスクトップインフラのことです。VDIは、デスクトップ環境を仮想化し、リモートでアクセス可能にします。</p>
                    <h3>ex. 仮想デスクトップ、仮想化、リモートアクセス</h3>
                `
    },
    {
        id: 'slide122',
        title: 'VPN',
        content: `
                    <p>VPN（Virtual Private Network）とは、仮想プライベートネットワークのことです。VPNは、インターネット上で安全な通信を確立します。</p>
                    <h3>ex. 仮想プライベートネットワーク、安全通信、インターネット</h3>
                `
    },
    {
        id: 'slide123',
        title: 'VR',
        content: `
                    <p>VR（Virtual Reality）とは、仮想現実のことです。VRは、コンピュータ技術を用いて仮想の世界を体験する技術です。</p>
                    <h3>ex. 仮想現実、体験、コンピュータ技術</h3>
                `
    },
    {
        id: 'slide124',
        title: 'WAF',
        content: `
                    <p>WAF（Web Application Firewall）とは、ウェブアプリケーションファイアウォールのことです。WAFは、ウェブアプリケーションへの攻撃を防ぐためのセキュリティ対策です。</p>
                    <h3>ex. ウェブアプリケーション、ファイアウォール、セキュリティ対策</h3>
                `
    },
    {
        id: 'slide125',
        title: 'WAN',
        content: `
                    <p>WAN（Wide Area Network）とは、広域ネットワークのことです。WANは、広範囲にわたるネットワークを構築します。</p>
                    <h3>ex. 広域ネットワーク、広範囲、ネットワーク構築</h3>
                `
    },
    {
        id: 'slide126',
        title: 'WBS',
        content: `
                    <p>WBS（Work Breakdown Structure）とは、作業分解構成のことです。WBSは、プロジェクトの作業を階層的に分解し、管理しやすくする手法です。</p>
                    <h3>ex. 作業分解、プロジェクト管理、階層構造</h3>
                `
    },
    {
        id: 'slide127',
        title: 'Web',
        content: `
                    <p>Webとは、インターネット上で情報を提供する仕組みのことです。Webは、ウェブサイトやウェブアプリケーションを通じて情報を提供します。</p>
                    <h3>ex. インターネット、情報提供、ウェブサイト</h3>
                `
    },
    {
        id: 'slide128',
        title: 'XML',
        content: `
                    <p>XML（eXtensible Markup Language）とは、拡張可能なマークアップ言語のことです。XMLは、データの構造を定義し、データの交換を容易にします。</p>
                    <h3>ex. マークアップ言語、データ構造、データ交換</h3>
                `
    }

];
