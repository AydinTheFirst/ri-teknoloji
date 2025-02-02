import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import {
  LucideBrain,
  LucideBriefcaseBusiness,
  LucideCode,
  LucideComputer,
  LucideDatabase,
  LucidePanelsTopLeft,
  LucideShoppingCart,
  LucideSmartphone,
} from "lucide-react";

interface Review {
  body: string;
  icon: React.ReactNode;
  name: string;
}

const reviews: Review[] = [
  {
    body: "Şirketinizin verilerini derinlemesine analiz ediyor, anlamlandırıyor ve iş stratejinize yön verecek şekilde yorumluyoruz.",
    icon: <LucideDatabase className="text-green-500" />,
    name: "Veri Analizi",
  },
  {
    body: "Müşteri ilişkilerinizi dijitalleştiriyor, satış ve pazarlama süreçlerinizi akıllı sistemlerle yönetmenizi sağlıyoruz.",
    icon: <LucideComputer className="text-blue-500" />,
    name: "CRM Yazılımları",
  },
  {
    body: "iOS ve Android platformlarında yüksek performanslı, kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
    icon: <LucideSmartphone className="text-yellow-500" />,
    name: "Mobil Uygulama Geliştirme",
  },
  {
    body: "Teknoloji yol haritanızı çiziyor, doğru yazılım çözümlerini seçmeniz için uzman danışmanlık sunuyoruz.",
    icon: <LucideCode className="text-red-500" />,
    name: "Yazılım Danışmanlığı",
  },
  {
    body: "Modern ve responsive web tasarımlarla markanızın dijital yüzünü güçlendiriyoruz.",
    icon: <LucidePanelsTopLeft className="text-purple-500" />,
    name: "Web Tasarım & Geliştirme",
  },
  {
    body: "Güvenli ödeme sistemleri, entegre stok yönetimi ve mobil uyumlu e-ticaret platformları inşa ediyoruz.",
    icon: <LucideShoppingCart className="text-fuchsia-500" />,
    name: "E-Ticaret",
  },
  {
    body: "Makine öğrenmesi ve derin öğrenme teknolojileriyle iş süreçlerinizi otomatikleştiriyoruz.",
    icon: <LucideBrain className="text-cyan-500" />,
    name: "Yapay Zeka Destekli Yazılımlar",
  },
  {
    body: "Kurumsal kaynak planlamasından proje yönetimine tüm operasyonel süreçlerinizi dijitalleştiriyoruz.",
    icon: <LucideBriefcaseBusiness className="text-indigo-500" />,
    name: "İş Yönetim Sistemleri",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ body, icon, name }: Review) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {icon}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee className="[--duration:20s]" pauseOnHover>
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee className="[--duration:20s]" pauseOnHover reverse>
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
