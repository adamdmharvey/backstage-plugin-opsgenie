import { Entity } from "@backstage/catalog-model";

export const OPSGENIE_ANNOTATION = 'opsgenie.com/component-selector';

export const isPluginApplicableToEntity = (entity: Entity) => Boolean(entity.metadata.annotations?.[OPSGENIE_ANNOTATION]);