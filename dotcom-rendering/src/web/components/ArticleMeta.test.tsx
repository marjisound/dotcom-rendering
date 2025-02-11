import { render } from '@testing-library/react';

import { Design, Display, Pillar } from '@guardian/types';

import { ArticleMeta } from './ArticleMeta';
import { decidePalette } from '../lib/decidePalette';
import { interactiveLegacyClasses } from '../layouts/lib/interactiveLegacyStyling';

describe('ArticleMeta', () => {
	it('It should contain legacy class names to support customised styling in interactives', () => {
		const format = {
			theme: Pillar.Lifestyle,
			design: Design.Interactive,
			display: Display.Immersive,
		};

		const { container } = render(
			<ArticleMeta
				format={format}
				palette={decidePalette(format)}
				pageId="1234"
				webTitle="A title"
				author={{ byline: 'Observer writers' }}
				tags={[
					{
						id: 'lifeandstyle/series/observer-design',
						type: 'Series',
						title: 'Observer Design',
					},
				]}
				primaryDateline="primary date line"
				secondaryDateline="secondary date line"
			/>,
		);

		expect(
			container.querySelector(
				`.${interactiveLegacyClasses.metaContainer}`,
			),
		).not.toBeNull();
		expect(
			container.querySelector(`.${interactiveLegacyClasses.shareIcons}`),
		).not.toBeNull();
	});

	it("It should not contain legacy class names for articles that aren't interactives", () => {
		const format = {
			theme: Pillar.Lifestyle,
			design: Design.Article,
			display: Display.Standard,
		};

		const { container } = render(
			<ArticleMeta
				format={format}
				palette={decidePalette(format)}
				pageId="1234"
				webTitle="A title"
				author={{ byline: 'Observer writers' }}
				tags={[
					{
						id: 'lifeandstyle/series/observer-design',
						type: 'Series',
						title: 'Observer Design',
					},
				]}
				primaryDateline="primary date line"
				secondaryDateline="secondary date line"
			/>,
		);

		expect(
			container.querySelector(
				`.${interactiveLegacyClasses.metaContainer}`,
			),
		).toBeNull();
		expect(
			container.querySelector(`.${interactiveLegacyClasses.shareIcons}`),
		).toBeNull();
	});
});
