import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Adobe XD in 2019.
                  </ListItem>
                  <ListItem>
                    Any graphics & Video I create are created in Adobe Photoshop, Adobe Premier Pro CC.
                  </ListItem>
                  
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Total Understanding of {' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    To work with developer and provide support efficiently
                  </ListItem>
                  <ListItem>
                    <b>HTML, CSS, TAILWIND, REACT</b> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I’m using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it’s
                    a great way to add spring animations to React and three.js.
                  </ListItem>
                 
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>AMD Ryzen 5800x</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>MSI Gaming X Trio RTX 3080</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>GSkill 32GB DDR4 3600mhz CAS 18</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Motherboard</TableHeadCell>
                    <TableCell>MSI B550 Tomahawk</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Logitech MX Keys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″ (2022 M1 Max)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
