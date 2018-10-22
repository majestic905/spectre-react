import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, action, select } from '@storybook/addon-knobs'

import { Icon, Button, Label } from '../src'
import { Container, Col, Row } from '../src/Grid'
import { FormGroup, Input } from '../src/Form'

storiesOf('Forms', module)
  .add('Default', () => (
    <Container>
      <Row>
        <Col all={6} xs={12}>
          <form>
            <FormGroup>
              <Label form for='input-example-1'>Name</Label>
              <Input placeholder='username' id='input-example-1' />
            </FormGroup>

            <FormGroup>
              <Label form for='input-example-2'>Password</Label>
              <Input type='password' id='input-example-2' placeholder='password' />
            </FormGroup>

            <FormGroup>
              <Label form for='input-example-3'>Email</Label>
              <Input id='input-example-3' type='email' placeholder='email'
                iconLeft={boolean('iconLeft', true)}
                iconRight={boolean('iconRight', false)}
              >
                <Icon formIcon icon={text('Icon', 'mail')} />
              </Input>
            </FormGroup>

            <Button type='submit'>
            Create Account
              <Icon icon='check' />
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  ))
