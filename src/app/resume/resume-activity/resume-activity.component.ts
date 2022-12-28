import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Role } from '../resume-activity-content/resume-activity-content.models';

@Component({
  selector: 'resume-activity',
  templateUrl: './resume-activity.component.html',
  styleUrls: ['./resume-activity.component.scss'],
})
export class ResumeActivityComponent implements OnInit {
  panelOpenState: number = 0;
  @Output() intershipExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() experienceExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() diplomaExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() trainingExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  professionalExperience: Role[] = [
    {
      date: 'Depuis janvier 2022',
      description: 'Responsable Système Qualité',
      place: 'THERA Laboratoires El Agba, TUNIS',
      tasks: [
        {
          description: 'Système documentaire ',
          tasks: [
            'Garantit la conformité et l’amélioration du système documentaire selon les exigences internes ainsi que les exigences règlementaires.',
          ],
        },
        {
          description: 'CAPA',
          tasks: [
            'Met en place les CAPAs issus des audits et de gestion documentaire',
            "Suit la réalisation et l'efficacité des CAPA",
          ],
        },
        {
          description: 'Audit',
          tasks: [
            'Met en place le programme annuel d’audit interne et externe',
            'Valide les plans et les rapports d’audits internes et externes',
            'Contrôle la conformité des processus par rapport aux référentiels règlementaire et internes à travers des audits (interne et externe) et des tournée qualité',
          ],
        },
      ],
    },
    {
      date: 'De mars 2021 à décembre 2021',
      description:
        'Ingénieur Management Qualité, chargé RAP et validation process',
      place: 'THERA Laboratoires El Agba, TUNIS',
      tasks: [
        {
          tasks: [
            'Participe au déroulement de la stratégie de validation des procédés de fabrication en fonction des besoins établis dans le respect de la réglementation et des exigences internes',
            'Met en place les revues annuels qualité produit selon le planning prédéfini',
            'Assure la validation des durées de stockage des intermédiaires de production.',
          ],
        },
      ],
    },
  ];

  diplomas: Role[] = [
    {
      date: 'Octobre 2020',
      description: 'Diplôme national d’ingénieur en chimie industrielle',
      place:
        'Institut National des Sciences Appliquées et de Technologie (INSAT) TunisTunisie',
      tasks: [
        {
          description: 'Option ',
          tasks: ['chimie analytique'],
        },
        {
          description: 'mention',
          tasks: ['Très bien'],
        },
      ],
    },
    {
      date: '2015',
      description: 'Baccalauréat science expérimentale',
      place: 'assad ibn fourat manouba, Tunisie',
      tasks: [{ description: 'mention', tasks: ['bien'] }],
    },
  ];
  internships: Role[] = [
    {
      date: 'De février 2020 à septembre 2020',
      description:
        "Projet de fin d'études: Traitement des eaux de production pétrolières",
      place:
        "Société Italo-Tunisienne d'exploitation pétrolière SITEP Tunis, TUNISIE",
    },
    {
      date: 'Juillet 2019',
      description:
        "Evaluation de l'effet de l'anti-mousse sur la brillance d'une peinture brillante",
      place: 'MPC PROKIM Ben Arous, Tunisie',
    },
    {
      date: 'Juillet 2018',
      description: 'Validation de la méthode de détermination du temps de gel',
      place: 'MPC PROKIM Ben Arouss',
    },
  ];
  trainings: Role[] = [
    {
      date: 'Juin 2022',
      description:
        "La méthodologie de métrologie : Les Bonnes Pratiques métrologiques dans l'industrie pharmaceutique",
      place: 'Centre de formation : PMC Formation Formation inter-entreprise',
    },
    {
      date: 'Mai 2022',
      description:
        "Méthode et pratique de l'audit interne selon ISO19011 V2018",
      place: 'Centre de formation : PMC Formation Formation inter-entreprise',
    },
    {
      date: 'Mars 2022',
      description:
        "ICH Q9 et analyse de risque dans l'industrie pharmaceutique : méthode AMDEC",
      place:
        'Centre de formation : OSI (One Step Institute) Formation inter-entreprise',
    },
    {
      date: 'Février 2022',
      description: 'Formation des formateurs',
      place:
        'Centre de formation : OSI (One Step Institute) Formation inter-entreprise',
    },
    {
      date: 'Septembre 2021',
      description: 'Les bonnes pratiques de fabrication',
      place:
        'Centre de formation OSI (One Step Institute) Formation inter-entreprise',
    },
  ];
  constructor() {}

  ngOnInit() {}

  internshipExpanded(expanded: boolean) {
    this.intershipExpandedEvent.emit(expanded);
  }
  diplomaExpanded(expanded: boolean) {
    this.diplomaExpandedEvent.emit(expanded);
  }
  experienceExpanded(expanded: boolean) {
    this.experienceExpandedEvent.emit(expanded);
  }

  trainingExpanded(expanded: boolean) {
    this.trainingExpandedEvent.emit(expanded);
  }
}
