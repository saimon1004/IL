import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">株式会社IL</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">企業概要</button>
            <button onClick={() => scrollToSection("service")} className="hover:text-primary transition-colors">サービス</button>
            <button onClick={() => scrollToSection("quality")} className="hover:text-primary transition-colors">品質</button>
            <button onClick={() => scrollToSection("merit")} className="hover:text-primary transition-colors">メリット</button>
            <button onClick={() => scrollToSection("price")} className="hover:text-primary transition-colors">料金</button>
            <button onClick={() => scrollToSection("voice")} className="hover:text-primary transition-colors">お客様の声</button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90">お問い合わせ</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="container py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-primary transition-colors">企業概要</button>
              <button onClick={() => scrollToSection("service")} className="text-left hover:text-primary transition-colors">サービス</button>
              <button onClick={() => scrollToSection("quality")} className="text-left hover:text-primary transition-colors">品質</button>
              <button onClick={() => scrollToSection("merit")} className="text-left hover:text-primary transition-colors">メリット</button>
              <button onClick={() => scrollToSection("price")} className="text-left hover:text-primary transition-colors">料金</button>
              <button onClick={() => scrollToSection("voice")} className="text-left hover:text-primary transition-colors">お客様の声</button>
              <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary text-primary-foreground">お問い合わせ</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-wagyu.jpg)",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 container text-center">
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-6">
            飲食店向け<br />卸売サービス
          </h1>
          <p className="text-xl md:text-3xl text-foreground mb-4">
            株式会社 IL × 焼肉季和〜ときわ〜
          </p>
          <p className="text-lg md:text-2xl text-muted-foreground mb-8">
            高品質な食肉を、<br className="md:hidden" />職人の技術とともに
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            お問い合わせはこちら
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">企業概要</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">株式会社 IL</h3>
              <div className="space-y-4 text-lg">
                <p><span className="font-bold text-primary">住所:</span> 大阪府吹田市広芝町 10-8 江坂重友ビル 236</p>
                <p><span className="font-bold text-primary">事業内容:</span> 経営コンサルティング、教育研修、人材紹介</p>
                <p><span className="font-bold text-primary">代表取締役:</span> 白原 伸暉</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">焼肉季和〜ときわ〜</h3>
              <div className="space-y-4 text-lg">
                <p><span className="font-bold text-primary">住所:</span> 大阪市天王寺区上本町</p>
                <p><span className="font-bold text-primary">事業内容:</span> 焼肉店</p>
                <p><span className="font-bold text-primary">オーナー:</span> 東 哲和</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">サービスにかける想い</h2>
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
            <p>
              少子高齢化と生産年齢人口の減少、また飲食店における就労人口の減少に伴い、<span className="text-primary font-bold">食肉を加工する職人は年々減少</span>し、職人の確保は大きな課題となっております。また飲食店を開業しようにも、一見では高品質な肉を確保することも難しく、品質の担保が課題となっております。
            </p>
            <p>
              このような状況は、個人店の新規出店を困難にし、また既存店舗の経営圧迫につながり、これまでの焼肉店の生態系がますます破壊されることに対する<span className="text-primary font-bold">危機感</span>を感じています。
            </p>
            <p>
              こうした負の状況を打開し、ステークホルダーの皆様にとって、常により良いサービスを模索・提供することで、<span className="text-primary font-bold">日本の食文化の保全に寄与したい</span>と考えています。
            </p>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">サービス概要</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">飲食店（焼肉店など）向け卸売事業</h3>
              <p className="text-xl mb-8 text-primary font-bold">高品質な食材を即座に提供できる状態で納品いたします</p>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-2xl">1</span>
                  <p>精肉（肩ロース、ハネシタ、三角カルビ、いちぼ、ミスジ等）</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-2xl">2</span>
                  <p>ホルモン（塩タン、てっちゃん、上ミノ、レバー等）</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-2xl">3</span>
                  <p>各種タレ（もみだれ、つけだれ、ホルモンだれ）</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-2xl">4</span>
                  <p>スープ、冷麺、その他一品料理</p>
                </div>
              </div>
              <p className="mt-8 text-lg">
                全て<span className="text-primary font-bold">加工および調理済み</span>の食品として、解凍後すぐにご提供いただけます。
              </p>
            </div>
            <div>
              <img src="/wagyu-platter.jpg" alt="A5等級 黒毛和牛" className="rounded-lg shadow-2xl w-full" />
              <p className="text-center mt-4 text-2xl font-bold text-primary">A5等級 黒毛和牛</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">食肉の品質</h2>
          <p className="text-center text-xl mb-12">
            当サービスでは、<span className="text-primary font-bold">A5ランクを原則担保</span>した高級店クオリティの食肉を安定的にご提供いたします。
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4">A5ランクの品質保証</h3>
                <p className="text-lg">最高級ランクの食肉を原則として担保し、高級店と同等のクオリティを実現</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4">職人による厳選</h3>
                <p className="text-lg">大阪本場鶴橋の某有名店で修行をした東さんが、一つ一つ丁寧に厳選</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4">こだわり抜いた食材</h3>
                <p className="text-lg">長年の経験と確かな目利きで、最高品質の食肉のみを選定</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-4">04</div>
                <h3 className="text-2xl font-bold mb-4">安定した供給体制</h3>
                <p className="text-lg">複数のルートから独自の人脈を駆使し、高級店のクオリティを安定してご提供</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Craftsman Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">職人紹介</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">👨‍🍳</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">東 哲和</h3>
              <p className="text-xl text-muted-foreground">焼肉季和〜ときわ〜 オーナー</p>
            </div>
            <div className="space-y-6 text-lg">
              <p className="text-center">
                東 哲和氏は、肉の素材を見極めたトリミングを施すことで、肉そのものの味を最大限引き出すカットを行っています。
              </p>
              <div className="grid gap-6 mt-8">
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">経歴</h4>
                    <p>著名人御用達の大阪本場鶴橋の超有名店にて18年間修行</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">独立</h4>
                    <p>その後独立し、焼肉季和〜ときわ〜をオープン</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">技術</h4>
                    <p>手入れの行き届いたナイフによる丁寧なトリミング</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">想い</h4>
                    <p>飲食店従事者の社会的地位向上と豊かさに貢献</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merit Section */}
      <section id="merit" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">本サービスを導入するメリット</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img src="/premium-beef.jpg" alt="高品質な食肉" className="rounded-lg shadow-2xl w-full" />
            </div>
            <div className="space-y-8">
              <Card className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-primary">1</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">高級店クオリティの食肉を安定的に仕入れ可能</h3>
                      <p>複数のルートから独自の人脈を駆使し、食肉を確保。精肉やホルモン、超有名店のノウハウを昇華させたタレやスープ。一流のクオリティを担保して納品</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-primary">2</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">包丁を持ったことがない人でも一流店の味で勝負</h3>
                      <p>全ての食材を解凍後、即座に提供できる状態で納品。飲食店開業支援（無料簡易コンサルティング）、調理研修（有料）で内製化も支援</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-4">3</div>
                <h3 className="text-xl font-bold mb-3">職人及び調理師の採用リスクをなくす</h3>
                <p>少子高齢化に伴う生産年齢人口の減少、採用市場における飲食店の不人気、職人及び調理師の確保の困難さを<span className="text-primary font-bold">外注化で解消</span></p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-4">4</div>
                <h3 className="text-xl font-bold mb-3">固定費の変動費化</h3>
                <p>職人への給与は高額な固定費。納品数量に応じた<span className="text-primary font-bold">支出調整が可能</span>。繁忙期・閑散期に応じた経営効率化</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-4">5</div>
                <h3 className="text-xl font-bold mb-3">フランチャイズ以上の自由度</h3>
                <p>ロイヤルティなどその他費用は一切なし。店舗名など、オーナー様の店舗への想いを<span className="text-primary font-bold">自由に表現することが可能</span></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">料金表</h2>
          <p className="text-center text-xl mb-16 text-muted-foreground">単価表（ロットに応じて割引適用可）</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 精肉 */}
            <Card className="bg-background border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-6 text-center">精肉</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>肩ロース</span>
                    <span className="text-primary font-bold">¥7,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>ハネシタ</span>
                    <span className="text-primary font-bold">¥15,000/kg</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>三角カルビ</span>
                    <span className="text-primary font-bold">¥6,500/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>ラム（もも）</span>
                    <span className="text-primary font-bold">¥7,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>いちぼ</span>
                    <span className="text-primary font-bold">¥15,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>ミスジ</span>
                    <span className="text-primary font-bold">¥15,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>サーロイン</span>
                    <span className="text-primary font-bold">¥17,000/kg〜</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ホルモン */}
            <Card className="bg-background border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-6 text-center">ホルモン</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>塩タン（1枚）</span>
                    <span className="text-primary font-bold">¥100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>てっちゃん</span>
                    <span className="text-primary font-bold">¥2,500/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>あかせん</span>
                    <span className="text-primary font-bold">¥2,300/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>上ミノ</span>
                    <span className="text-primary font-bold">¥3,300/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>しんぞう</span>
                    <span className="text-primary font-bold">¥1,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>ウルテ</span>
                    <span className="text-primary font-bold">¥1,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>コリコリ</span>
                    <span className="text-primary font-bold">¥1,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>つらみ</span>
                    <span className="text-primary font-bold">¥4,000/kg〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>レバー</span>
                    <span className="text-primary font-bold">¥3,300/kg〜</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* その他 */}
            <Card className="bg-background border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-6 text-center">その他</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>スープ</span>
                    <span className="text-primary font-bold">要相談</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>一品料理</span>
                    <span className="text-primary font-bold">要相談</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>もみだれ</span>
                    <span className="text-primary font-bold">要相談</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>つけだれ</span>
                    <span className="text-primary font-bold">要相談</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>ホルモンだれ</span>
                    <span className="text-primary font-bold">要相談</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-muted-foreground">※上記以外にもご希望があればご相談の上、提供可能です</p>
        </div>
      </section>

      {/* Voice Section */}
      <section id="voice" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">お客様の声</h2>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Voice 1 */}
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">大阪市生野区焼肉店様</h3>
                <p className="text-xl font-bold mb-6">〜薄利多売モデルからの脱却〜</p>
                <p className="text-lg leading-relaxed mb-6">
                  仕入単価は3倍になりましたが、全て即提供可能な状態で納品されるため<span className="text-primary font-bold">ロスが出ず</span>、肉質がいいので販売単価を上げることができ、<span className="text-primary font-bold">薄利多売のモデルから脱却</span>できました。
                </p>
                <p className="text-lg leading-relaxed">
                  また肉質の改善に伴い、<span className="text-primary font-bold">高単価のアルコール類</span>をご希望されるお客様が増え、お店全体の利益率が向上しました。あまり他の飲食店さんには使ってほしくないですが、<span className="text-primary font-bold">素晴らしいサービス</span>だと思います。
                </p>
              </CardContent>
            </Card>

            {/* Voice 2 */}
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">大阪中央区焼肉店様</h3>
                <p className="text-xl font-bold mb-6">〜人件費削減と好循環の創出〜</p>
                <p className="text-lg leading-relaxed mb-6">
                  <span className="text-primary font-bold">職人の人件費負担を減らす</span>ことができ、採用にかかっていたコストやなかなか定着せず離職者が出ることで発生していた<span className="text-primary font-bold">教育コストを減らす</span>ことができました。
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  コストをカットした分、既存の従業員にも還元できるので<span className="text-primary font-bold">従業員の満足度も向上</span>し好循環が生まれました。
                </p>
                <p className="text-lg leading-relaxed">
                  お客様の<span className="text-primary font-bold">リピート率や口コミの評価</span>も高まり、広告に力を入れなくてもお客様がお客様を呼んでくださる状態になり経営に対する好影響の幅広さに驚いています。
                </p>
              </CardContent>
            </Card>

            {/* Voice 3 */}
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">大阪市北区焼肉店様</h3>
                <p className="text-xl font-bold mb-6">〜未経験からの開業成功〜</p>
                <p className="text-lg leading-relaxed mb-6">
                  本業とは別で飲食店を開きたいと考え、<span className="text-primary font-bold">人の採用や仕入れ先の開拓</span>など検討しておりましたが、なかなか難しく計画を中断していました。
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  そんな時にこのサービスを知り、これまで<span className="text-primary font-bold">飲食業界での経験がなく、料理もほとんどしたことがない</span>私でしたが、このサービスのおかげで<span className="text-primary font-bold">すぐに焼肉店を開業</span>できました。
                </p>
                <p className="text-lg leading-relaxed">
                  今では<span className="text-primary font-bold">近隣の方々に愛されるお店</span>として地域に根ざした理想の焼肉店を作ることができています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">お問い合わせ</h2>
          
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl">😊</span>
                <p className="text-xl">関わる全ての方が笑顔になるお付き合いを続けることで</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl">❤️</span>
                <p className="text-xl">日本の食文化の保全に寄与すること</p>
              </div>
            </div>

            <p className="text-2xl font-bold text-primary">
              この想いを形にするため 常にベストを尽くしてまいります。
            </p>

            <div className="bg-background rounded-lg p-8 space-y-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">📧</span>
                <p className="text-xl">ご不明点や個別のご要望などぜひお聞かせください</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg"><span className="text-primary font-bold">Mail:</span> (アドレス)</p>
                <p className="text-lg"><span className="text-primary font-bold">LINE:</span> (QR)</p>
              </div>

              <p className="text-xl text-primary font-bold">お気軽にお問い合わせください</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container text-center">
          <p className="text-muted-foreground">© 2024 株式会社IL × 焼肉季和〜ときわ〜 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
