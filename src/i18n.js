import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      // Textos generales
      change_language: 'Cambiar idioma de la página',
      ir_abajo: 'Ir Abajo',
      proyectos_personales: 'Proyectos Personales',
      autor: 'Autor',
      hola: 'Hola :v, que tal?',
      futuro_pentester: 'Futuro Pentester Web :)',
      
      // Reproductor de música
      selector_musica: 'Selector de música',
      pausar: 'Pausar',
      reproducir: 'Reproducir',
      cancion_piano: 'Piano :v',
      cancion_triste: 'Triste ._.',
      cancion_depresiva: 'Depresiva :(',
      
      // Proyectos
      proyecto_notas_hacking_titulo: 'Notas de Hacking',
      proyecto_notas_hacking_descripcion: 'Pagina web, que contiene todos mis notas y aprendizajes en hacking en un orden estructurado, para repasar y para aprender.',
      proyecto_notas_hacking_enlace: 'Ir a Notas de Hacking (En construcción)',
      
      proyecto_ctf_notas_titulo: 'CTF Notas',
      proyecto_ctf_notas_descripcion: 'En un Futuro cercano tendre un apartado especial para notas de CTFs que vaya realizando, todo lo necesario.',
      proyecto_ctf_notas_enlace: 'Ir a CTF Notas (No disponible)',
      
      proyecto_hyprdots_titulo: 'Hyprdots',
      proyecto_hyprdots_descripcion: 'En un futuro, la web de hyprdots, estaran las configuraciones de mi pc, todo lo que es las diferentes pre-visualizaciones de mi perzonalizacion del pc, y sus respectivas configuraciones con atajos de teclados, y mucho mas. (configuraciones con Arch Linux, implementando el gestor de ventanas de Hyprland, mas informacion en la web).',
      proyecto_hyprdots_enlace: 'Ir a Hyprdots (configuraciones del pc) (No disponible)',
      
      proyecto_arch_linux_titulo: 'Notas de Arch Linux',
      proyecto_arch_linux_descripcion: 'En el futuro, pagina web, que recopilara una serie de informacion corta y resumida acerca el funcionamiento de arch linux y su configuraciones enfocadas en la utilizacion de Arch con hyprland, desde la instalacion hasta la configuraciones de atajos de teclados.',
      proyecto_arch_linux_enlace: 'Ir a Notas de Arch Linux (No disponible)',
      
      proyecto_notas_vida_titulo: 'Notas de la Vida',
      proyecto_notas_vida_parrafo1: 'En el futuro, pagina web, que tendra el proposito de ser un recopilamiento de consejos y buenas practicas en la vida en general, lo se, parece, raro, o da mucho de que pensar, pero estas notas se basaran en ayudar y orientar a jovenes o adultos que quieran aprender, a como realmente es vivir la vida, sera una recopilacion de consejos de cosas sencillas como aprender a socializar, a manejar la economia, el estudio, el tiempo, a conseguir novia/novio, a manejar pensamientos, e incluso puede que si no has encontrado un proposito en la vida y te sientas vacio esta pagina web sera de gran ayuda.',
      proyecto_notas_vida_parrafo2: 'Y si todo lo anterior no es poco, vamos a ver como es que pensaban nuestros antepasados en diferentes regiones del mundo y pensameintos de la vida que hasta el dia de hoy nos han influenciado(filosofia), tocando temas de religiones y otras formas de pensamiento.',
      proyecto_notas_vida_parrafo3: 'Todo lo anterior lo estaremos aprendiendo de la mano, a medida que yo vaya aprendiendo, lo estare, enseñando en la web.',
      proyecto_notas_vida_enlace: 'Ir a Notas de la Vida (No disponible)',
      
      proyecto_politica_titulo: 'Notas de Politica',
      proyecto_politica_descripcion: 'En el futuro se desarrollará una página web en formato de blog que recopilará información sobre el funcionamiento de la política y los distintos ideales, presentada de forma resumida y precisa. Su propósito será analizar los factores internos y externos de cada país, respetando sus principios y tradiciones, para proponer estrategias y planes orientados al progreso y a la resolución de problemas sociales a nivel global, abordando cada nación de manera individual como parte de un proyecto personal y de entretenimiento.',
      proyecto_politica_enlace: 'Ir a Notas de Politica (No disponible)'
    }
  },
  zh: {
    translation: {
      // Textos generales
      change_language: '更改页面语言',
      ir_abajo: '向下',
      proyectos_personales: '个人项目',
      autor: '作者',
      hola: '你好 :v，怎么样？',
      futuro_pentester: '未来的 Web 渗透测试工程师 :)',
      
      // Reproductor de música
      selector_musica: '音乐选择器',
      pausar: '暂停',
      reproducir: '播放',
      cancion_piano: '钢琴 :v',
      cancion_triste: '悲伤 ._.',
      cancion_depresiva: '抑郁 :(',
      
      // Proyectos
      proyecto_notas_hacking_titulo: '黑客笔记',
      proyecto_notas_hacking_descripcion: '一个网页，包含我所有结构化的黑客学习笔记，用于复习和学习。',
      proyecto_notas_hacking_enlace: '前往黑客笔记（建设中）',
      
      proyecto_ctf_notas_titulo: 'CTF 笔记',
      proyecto_ctf_notas_descripcion: '在不久的将来，我将有一个专门的部分用于记录我进行的 CTF 的所有必要内容。',
      proyecto_ctf_notas_enlace: '前往 CTF 笔记（不可用）',
      
      proyecto_hyprdots_titulo: 'Hyprdots',
      proyecto_hyprdots_descripcion: '未来，hyprdots 网站将包含我的电脑配置，包括我的电脑个性化的不同预览，以及相应的键盘快捷键配置等更多内容。（使用 Arch Linux 配置，实现 Hyprland 窗口管理器，更多信息请访问网站）。',
      proyecto_hyprdots_enlace: '前往 Hyprdots（电脑配置）（不可用）',
      
      proyecto_arch_linux_titulo: 'Arch Linux 笔记',
      proyecto_arch_linux_descripcion: '未来，一个网页将收集关于 Arch Linux 功能的简短摘要信息，以及专注于使用 Arch 和 hyprland 的配置，从安装到键盘快捷键配置。',
      proyecto_arch_linux_enlace: '前往 Arch Linux 笔记（不可用）',
      
      proyecto_notas_vida_titulo: '生活笔记',
      proyecto_notas_vida_parrafo1: '未来，一个网页将作为一般生活建议和良好实践的汇编。我知道这看起来很奇怪，或者让人思考很多，但这些笔记将基于帮助和指导想要学习的年轻人或成年人，了解真正的生活是什么，将是一系列简单事物的建议汇编，如学习社交、管理经济、学习、时间、找女朋友/男朋友、管理思想，甚至如果你还没有找到生活的目标并感到空虚，这个网页将非常有帮助。',
      proyecto_notas_vida_parrafo2: '如果以上还不够，我们将看看我们的祖先在世界不同地区的思维方式，以及至今仍影响我们的生活思想（哲学），涉及宗教和其他思维形式。',
      proyecto_notas_vida_parrafo3: '以上所有内容我们将一起学习，随着我的学习，我将在网站上教授。',
      proyecto_notas_vida_enlace: '前往生活笔记（不可用）',
      
      proyecto_politica_titulo: '政治笔记',
      proyecto_politica_descripcion: '未来将开发一个博客格式的网页，收集关于政治运作和不同理想的信息，以简洁准确的方式呈现。其目的是分析每个国家的内部和外部因素，尊重其原则和传统，提出面向进步和解决全球社会问题的策略和计划，将每个国家作为个人和娱乐项目的一部分进行单独处理。',
      proyecto_politica_enlace: '前往政治笔记（不可用）'
    }
  },
  ru: {
    translation: {
      // Textos generales
      change_language: 'Изменить язык страницы',
      ir_abajo: 'Вниз',
      proyectos_personales: 'Личные проекты',
      autor: 'Автор',
      hola: 'Привет :v, как дела?',
      futuro_pentester: 'Будущий веб-пентестер :)',
      
      // Reproductor de música
      selector_musica: 'Выбор музыки',
      pausar: 'Пауза',
      reproducir: 'Воспроизвести',
      cancion_piano: 'Фортепиано :v',
      cancion_triste: 'Грустно ._.',
      cancion_depresiva: 'Депрессивно :(',
      
      // Proyectos
      proyecto_notas_hacking_titulo: 'Заметки о хакинге',
      proyecto_notas_hacking_descripcion: 'Веб-страница, содержащая все мои структурированные заметки и знания о хакинге для повторения и обучения.',
      proyecto_notas_hacking_enlace: 'Перейти к Заметкам о хакинге (В разработке)',
      
      proyecto_ctf_notas_titulo: 'CTF Заметки',
      proyecto_ctf_notas_descripcion: 'В ближайшем будущем у меня будет специальный раздел для заметок о CTF, которые я буду выполнять, все необходимое.',
      proyecto_ctf_notas_enlace: 'Перейти к CTF Заметкам (Недоступно)',
      
      proyecto_hyprdots_titulo: 'Hyprdots',
      proyecto_hyprdots_descripcion: 'В будущем на веб-сайте hyprdots будут конфигурации моего компьютера, все различные предварительные просмотры моей персонализации компьютера, а также соответствующие конфигурации с сочетаниями клавиш и многое другое. (конфигурации с Arch Linux, реализующие менеджер окон Hyprland, больше информации на веб-сайте).',
      proyecto_hyprdots_enlace: 'Перейти к Hyprdots (конфигурации компьютера) (Недоступно)',
      
      proyecto_arch_linux_titulo: 'Заметки об Arch Linux',
      proyecto_arch_linux_descripcion: 'В будущем веб-страница, которая соберет серию краткой и резюмированной информации о работе Arch Linux и его конфигурациях, ориентированных на использование Arch с hyprland, от установки до конфигураций сочетаний клавиш.',
      proyecto_arch_linux_enlace: 'Перейти к Заметкам об Arch Linux (Недоступно)',
      
      proyecto_notas_vida_titulo: 'Заметки о жизни',
      proyecto_notas_vida_parrafo1: 'В будущем веб-страница, которая будет служить сборником советов и хороших практик в жизни в целом. Я знаю, это кажется странным или заставляет много думать, но эти заметки будут основаны на помощи и руководстве молодым людям или взрослым, которые хотят учиться, как на самом деле жить жизнью, это будет сборник советов о простых вещах, таких как обучение общению, управление экономикой, учеба, время, поиск девушки/парня, управление мыслями, и даже если вы не нашли цель в жизни и чувствуете себя пустым, эта веб-страница будет очень полезной.',
      proyecto_notas_vida_parrafo2: 'И если всего вышеперечисленного недостаточно, мы посмотрим, как думали наши предки в разных регионах мира, и мысли о жизни, которые до сих пор влияют на нас (философия), затрагивая темы религий и других форм мышления.',
      proyecto_notas_vida_parrafo3: 'Все вышеперечисленное мы будем изучать вместе, по мере того как я буду учиться, я буду преподавать на веб-сайте.',
      proyecto_notas_vida_enlace: 'Перейти к Заметкам о жизни (Недоступно)',
      
      proyecto_politica_titulo: 'Заметки о политике',
      proyecto_politica_descripcion: 'В будущем будет разработан веб-сайт в формате блога, который соберет информацию о функционировании политики и различных идеалах, представленную в краткой и точной форме. Его цель - проанализировать внутренние и внешние факторы каждой страны, уважая их принципы и традиции, чтобы предложить стратегии и планы, ориентированные на прогресс и решение социальных проблем на глобальном уровне, рассматривая каждую нацию индивидуально как часть личного и развлекательного проекта.',
      proyecto_politica_enlace: 'Перейти к Заметкам о политике (Недоступно)'
    }
  },
  en: {
    translation: {
      // Textos generales
      change_language: 'Change page language',
      ir_abajo: 'Go Down',
      proyectos_personales: 'Personal Projects',
      autor: 'Author',
      hola: 'Hello :v, how are you?',
      futuro_pentester: 'Future Web Pentester :)',
      
      // Reproductor de música
      selector_musica: 'Music Selector',
      pausar: 'Pause',
      reproducir: 'Play',
      cancion_piano: 'Piano :v',
      cancion_triste: 'Sad ._.',
      cancion_depresiva: 'Depressive :(',
      
      // Proyectos
      proyecto_notas_hacking_titulo: 'Hacking Notes',
      proyecto_notas_hacking_descripcion: 'Web page containing all my structured hacking notes and learnings for review and learning.',
      proyecto_notas_hacking_enlace: 'Go to Hacking Notes (Under construction)',
      
      proyecto_ctf_notas_titulo: 'CTF Notes',
      proyecto_ctf_notas_descripcion: 'In the near future I will have a special section for CTF notes that I will be doing, everything necessary.',
      proyecto_ctf_notas_enlace: 'Go to CTF Notes (Not available)',
      
      proyecto_hyprdots_titulo: 'Hyprdots',
      proyecto_hyprdots_descripcion: 'In the future, the hyprdots website will have my PC configurations, all the different previews of my PC personalization, and their respective configurations with keyboard shortcuts, and much more. (configurations with Arch Linux, implementing the Hyprland window manager, more information on the website).',
      proyecto_hyprdots_enlace: 'Go to Hyprdots (PC configurations) (Not available)',
      
      proyecto_arch_linux_titulo: 'Arch Linux Notes',
      proyecto_arch_linux_descripcion: 'In the future, a web page that will compile a series of short and summarized information about how Arch Linux works and its configurations focused on using Arch with hyprland, from installation to keyboard shortcut configurations.',
      proyecto_arch_linux_enlace: 'Go to Arch Linux Notes (Not available)',
      
      proyecto_notas_vida_titulo: 'Life Notes',
      proyecto_notas_vida_parrafo1: 'In the future, a web page that will serve as a compilation of advice and good practices in life in general. I know, it seems weird, or makes you think a lot, but these notes will be based on helping and guiding young people or adults who want to learn, how life really is, it will be a compilation of advice on simple things like learning to socialize, managing the economy, study, time, getting a girlfriend/boyfriend, managing thoughts, and even if you haven\'t found a purpose in life and feel empty, this web page will be very helpful.',
      proyecto_notas_vida_parrafo2: 'And if all of the above is not enough, we will see how our ancestors thought in different regions of the world and thoughts about life that to this day have influenced us (philosophy), touching on topics of religions and other forms of thought.',
      proyecto_notas_vida_parrafo3: 'All of the above we will be learning together, as I learn, I will be teaching on the website.',
      proyecto_notas_vida_enlace: 'Go to Life Notes (Not available)',
      
      proyecto_politica_titulo: 'Politics Notes',
      proyecto_politica_descripcion: 'In the future, a blog-format web page will be developed that will compile information about how politics works and the different ideals, presented in a summarized and precise way. Its purpose will be to analyze the internal and external factors of each country, respecting their principles and traditions, to propose strategies and plans oriented towards progress and solving social problems globally, addressing each nation individually as part of a personal and entertainment project.',
      proyecto_politica_enlace: 'Go to Politics Notes (Not available)'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
