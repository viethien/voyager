import { Selector } from 'reselect/src/reselect';
import { GenericState, UndoableStateBase } from '../models';
import { Schema } from 'compassql/build/src/schema';
import { InlineData } from 'vega-lite/build/src/data';
import { ShelfFieldDef } from '../models';
import { Dataset } from '../models/dataset';
export declare const selectData: (state: GenericState<UndoableStateBase>) => InlineData;
export declare const selectDataset: (state: GenericState<UndoableStateBase>) => Dataset;
export declare const selectSchema: (state: GenericState<UndoableStateBase>) => Schema;
export declare const selectPresetWildcardFields: Selector<GenericState<UndoableStateBase>, ShelfFieldDef[]>;
export declare const selectSchemaFieldDefs: Selector<GenericState<UndoableStateBase>, ShelfFieldDef[]>;
