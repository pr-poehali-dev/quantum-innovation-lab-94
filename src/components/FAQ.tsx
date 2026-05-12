import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Где вы работаете?",
    answer:
      "Студия Hously базируется в Москве, однако реализует проекты по всей России — от Калининграда до Владивостока. Для знаковых объектов готовы работать и за рубежом.",
  },
  {
    question: "Сколько длится проект от идеи до сдачи?",
    answer:
      "Частный дом площадью 200–400 м² в среднем занимает 10–16 месяцев: 2–3 месяца концепция, 3–4 месяца рабочая документация, остальное — авторский надзор в ходе строительства. Точные сроки обсуждаем индивидуально.",
  },
  {
    question: "Вы занимаетесь только проектированием или и строительством?",
    answer:
      "Hously — проектная студия. Мы разрабатываем архитектуру и интерьеры, подбираем подрядчиков и ведём авторский надзор на каждом этапе стройки. Строительные работы выполняют проверенные партнёры.",
  },
  {
    question: "Какой минимальный бюджет для начала работы?",
    answer:
      "Мы работаем с проектами от 15 млн рублей под ключ. Стоимость проектирования рассчитывается индивидуально и зависит от площади, сложности и региона. Первичная консультация — бесплатно.",
  },
  {
    question: "Можете доработать уже существующий проект или дом?",
    answer:
      "Да, мы занимаемся реконструкцией, перепланировкой и редизайном интерьеров. Уважаем то, что уже создано, и деликатно вписываем новое в существующий контекст.",
  },
  {
    question: "Как начать сотрудничество с Hously?",
    answer:
      "Напишите или позвоните нам. На первой бесплатной консультации мы обсудим ваш запрос, участок и бюджет. После этого предложим концепцию подхода и коммерческое предложение.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}