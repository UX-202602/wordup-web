export interface Example {
  en: string;
  es: string;
}

export interface Word {
  word: string;
  phonetic: string;
  meaningEs: string;
  meaningEn: string;
  examples: Example[];
}

export const WORDS: Word[] = [
  {
    word: 'Defenestration',
    phonetic: '/diːˌfen.ɪˈstreɪ.ʃən/',
    meaningEs: 'Acto de arrojar a una persona o cosa por la ventana',
    meaningEn: 'The act of throwing someone or something out of a window',
    examples: [
      { en: 'His death by defenestration.', es: 'Su muerte por defenestración.' },
      { en: 'He opened a window for the defenestration.', es: 'Abrió una ventana para la defenestración.' },
      {
        en: 'Prague has a long history of defenestrations: in 1948, Jan Masaryk, the foreign minister, was found dead, having apparently exited from his office window.',
        es: 'Praga tiene una larga historia de defenestraciones: en 1948, Jan Masaryk, el ministro de Asuntos Exteriores, fue hallado muerto tras haber salido, al parecer, por la ventana de su despacho.'
      },
    ],
  },
  {
    word: 'Serendipity',
    phonetic: '/ˌser.ənˈdɪp.ə.ti/',
    meaningEs: 'El hecho de encontrar cosas interesantes o valiosas por casualidad',
    meaningEn: 'The fact of finding interesting or valuable things by chance',
    examples: [
      {
        en: 'There is an element of serendipity about it, even systematic genome-wide screening.',
        es: 'Hay en ello un cierto componente de improvisación, incluso de serendipia.'
      },
      {
        en: 'This occurs through understanding of the basic mechanisms of drug response.',
        es: 'Esto se consigue mediante la comprensión de los mecanismos básicos de la respuesta a los fármacos.'
      },
    ],
  },
  {
    word: 'Ephemeral',
    phonetic: '/ɪˈfem.ər.əl/',
    meaningEs: 'Que dura muy poco tiempo',
    meaningEn: 'Lasting for a very short time',
    examples: [
      { en: 'Fame in the internet age is ephemeral.', es: 'La fama en la era de internet es efímera.' },
    ],
  },
];
