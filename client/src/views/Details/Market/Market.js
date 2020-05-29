import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
  Pagination, PaginationItem, PaginationLink, CardColumns, Container
} from 'reactstrap';

import {
  mainChart, mainChartOpts, 
} from './GetData'


class Market extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        
        <Row>
          <Col>
            <Card>
              <CardHeader style = {{backgroundColor: "#4D4D4D", color : 'white'}}>
                Cumulative Returns
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper" style={{ height: 400 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Card>
        <CardHeader style = {{backgroundColor: "#4D4D4D", color : 'white'}}>Performance</CardHeader>

        <div style = {{padding: '1rem'}}>
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>
              KOSPI
            </CardHeader>
              <CardBody>
                  <Row>
                    <Col>
                    <Table responsive bordered>
                    <thead style = {{ textAlign: 'center'}}>
                      {['날짜', '투자 비율', '매수금(만원)', '매도금(만원)', '실현손익', '수익률(%)', '수익여부'].map(it=><th>{it}</th>)}
                      </thead>
                    <tbody>
                      {[['2020/05/03',  50, 200, 100, 20, 1.1, 'Plus'], ['2020/05/02',  50, 200, 100, 20, 1.1, 'Plus'], 
                      ['2020/05/01',  50, 200, 100, 20, 1.1, 'Plus']].map(it=>{ return <tr>{it.map((data, num)=>{
                        if(num!=7) {
                          return <td style = {{ textAlign: 'center'}}>{data}</td>
                        } else {
                          if(data=='Plus') {
                            return <td style = {{ textAlign: 'center'}}><Badge color="success">{data}</Badge></td>
                          }
                        }
                      })}</tr>})}                        
                      </tbody>
                    </Table>

                    </Col>
                  </Row>
              </CardBody>
          </Card>

            <Card>
          <CardHeader>
          KOSDAQ
          </CardHeader>
          <CardBody>
              <Row>
                <Col>
                <Table responsive bordered>
                <thead style = {{ textAlign: 'center'}}>
                      {['날짜',  '투자 비율', '매수금(만원)', '매도금(만원)', '실현손익', '수익률(%)', '수익여부'].map(it=><th>{it}</th>)}
                      </thead>
                    <tbody>
                      {[['2020/05/03',  50, 200, 100, 20, 1.1, 'Plus'], ['2020/05/02',  50, 200, 100, 20, 1.1, 'Plus'], 
                      ['2020/05/01',  50, 200, 100, 20, 1.1, 'Plus']].map(it=>{ return <tr>{it.map((data, num)=>{
                        if(num!=7) {
                          return <td style = {{ textAlign: 'center'}}>{data}</td>
                        } else {
                          if(data=='Plus') {
                            return <td style = {{ textAlign: 'center'}}><Badge color="success">{data}</Badge></td>
                          }
                        }
                      })}</tr>})}                        
                      </tbody>
                    </Table>

                </Col>
              </Row>
              </CardBody>
            </Card>
          </CardColumns>
          </div>
        </Card>
      </div>
    );
  }
}

export default Market;
