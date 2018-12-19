/*
 * This file contains a component to display a course calendar.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import MarkdownIt from 'markdown-it';

import CollapsibleSection from './CollapsibleSection';
import AngleList from './AngleList';
import TitleLinkDescription from './TitleLinkDescription';

const md = new MarkdownIt();

const TopicsListContainer = styled.div`
  h2 {
    margin: 0;
  }
`;

const Topic = styled.div`
  h4 {
    margin: 8px 0 0 0;
  }
`;

const ResourceList = styled.div`
  display: flex;
  flex-wrap: wrap;

`

function CourseTopicsList({ title, topics }) {
  return (
    <TopicsListContainer>
      {title ? <h2>{title}</h2> : null}
      {topics.reverse().map((topic, i) => (
        <CollapsibleSection key={i} title={topic.title} startCollapsed={!topic.isCurrent}>
          <ResourceList>

          </ResourceList>
          <Topic>
            {topic.resources ?
              <div>
                <h4>Resources</h4>
                <AngleList singleAngle
                  items={topic.resources.map((resource, j) => (
                    <TitleLinkDescription key={j} {...resource} />
                  ))} />
              </div> :
              null
            }
            {topic.readings ?
              <div>
                <h4>Readings</h4>
                <AngleList singleAngle
                  items={topic.readings.map((reading, j) => (
                    <TitleLinkDescription key={j} {...reading} />
                  ))} />
              </div> :
              null
            }
            {topic.notes ?
              <div>
                <h4>Notes</h4>
                <AngleList singleAngle
                  items={topic.notes.map((note, j) => (
                    <span key={j} dangerouslySetInnerHTML={{ __html: md.renderInline(note) }} />
                  ))} />
              </div> :
              null
            }
          </Topic>
        </CollapsibleSection>
      ))}
    </TopicsListContainer>
  );
}

CourseTopicsList.propTypes = {
  title: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      description: PropTypes.string,
    })),
    readings: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      description: PropTypes.string,
    })),
    notes: PropTypes.arrayOf(PropTypes.string)
  })).isRequired
}

export default CourseTopicsList;
