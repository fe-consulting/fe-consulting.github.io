import React from 'react';
import { Layout, Article, Wrapper, Button, Header } from 'components';
import { Thin, Underlined } from '../components/styled/Text';
import { Hero, HeroLine } from '../components/styled/Hero';
import { Content } from '../components/styled/Content';

const IndexPage = () => (
	<Layout>
		<Header />

		<Wrapper>
			<Content>
				<Hero>
					<p>
						<HeroLine>
							We help organizations build{' '}
							<Underlined>better</Underlined> frontends.
						</HeroLine>

						<Thin>
							Specialized in <Underlined>Typescript</Underlined>,{' '}
							<Underlined>Angular</Underlined> and{' '}
							<Underlined>NGRX</Underlined>.
						</Thin>
					</p>
				</Hero>
			</Content>
		</Wrapper>
	</Layout>
);

export default IndexPage;
